import React, { useEffect, useState } from "react";
import { StyledModal } from "./style";
import Swal from "sweetalert2";
import FormModal from "../FormModal";
import { useSpring, animated } from "react-spring";


export default function Modal(props) {

    const [stateModal, setStateModal] = useState("modal");
    // const [resposta, setResposta] = useState();

    return (
        <>
            <HandleChangeModal
                showModal={stateModal}
                setState={setStateModal}
                handleCloseModal={props.handleCloseModal}
            />
        </>
    );
}

function HandleChangeModal({ showModal, setState, handleCloseModal }) {

    const handleClickOutsideModal = (e) => {
        if (e.target === e.currentTarget) {
            handleCloseModal();
        }
    };

    const bounceAnimation = useSpring({
        from: {
            transform: "scale(0.7)"
        },
        "45%": {
            transform: "scale(1.05)"
        },
        "80%": {
            transform: "scale(0.95)"
        },
        to: {
            transform: "scale(1)"
        },
        config: {
            mass: 0.7,
            tension: 500,
            friction: 14,
            precision: 0.009,
            velocity: 0.036
        }
    });

    const handleResponse = (handleCloseModal, response) => {
        if (response) {
            console.log(response)
            return response;
        }
        console.log(response)
        Swal.fire({
            title: "Tem certeza?",
            text: "Ao clicar em sim a reclamação será cancelada!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sim",
            cancelButtonText: "Não",
            customClass: {
                confirmButton: "custom-confirm-button-class",
                cancelButton: "custom-cancel-button-class"
            },
            buttonsStyling: false
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Cancelada!",
                    text: "Reclamação não respondida",
                    icon: "success",
                    customClass: {
                        confirmButton: "custom-confirm-button-class",
                    },
                    buttonsStyling: false
                });
                handleCloseModal();
            }
        });
    };

    return (
        <>
            {showModal === "modal" &&
                (<StyledModal onClick={handleClickOutsideModal}>

                    <animated.section style={bounceAnimation} >
                        <h2>Seu problema foi resolvido ?</h2>
                        <div className="response-button">
                            <button className="response-button-yes" onClick={(e) => setState("nao")}>Não</button>
                            <button className="response-button-yes" onClick={(e) => setState("sim")}>Sim</button>
                        </div>
                    </animated.section>
                </StyledModal>)}
            {showModal === "nao" &&
                (<StyledModal onClick={handleClickOutsideModal}>
                    <section >
                        <h2>Deseja enviar uma nova reclamacao ?</h2>
                        <div className="response-button">
                            <button className="response-button-yes" onClick={() => handleResponse(handleCloseModal, false)}>Não</button>
                            <button className="response-button-yes" onClick={(e) => handleResponse(handleCloseModal, true)}>Sim</button>
                        </div>
                    </section>
                </StyledModal>)
            }
            {
                showModal === "sim" &&
                (<StyledModal onClick={handleClickOutsideModal}>
                    <section>
                        <h2>Avalie a resposta da empresa</h2>
                        <div className="response-button">
                            <button className="send-button-avaliation">Enviar Avaliação</button>
                        </div>
                    </section>
                </StyledModal>)
            }
        </>
    );
}