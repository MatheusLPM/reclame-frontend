import React, { useEffect, useState } from "react";
import { StyledButtonRank, StyledRank } from "./style";
import Swal from "sweetalert2";
import { api } from "../../../Services/server";

import ReactLoading from 'react-loading';

export default function Avaliation(props) {

    const [selectAvaliation, setSelectAvaliation] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleSelectRank = (item) => {
        setSelectAvaliation(item);
    }

    const sendAvaliation = async (reclamacao) => {
        if (selectAvaliation || selectAvaliation == 0) {

            const formData = {
                nota: selectAvaliation,
                id_reclamacao: reclamacao,
                status: props.status
            }
            try {

                setLoading(true);
                const { data } = await api.post('/avaliacao/inserir', formData);
                console.log("enviou", data);

                setLoading(false);
                return true;

            } catch (error) {
                setLoading(false)
                return "erro";
            }
        }
        return false;
    }

    const handleSendRank = (item) => {

        Swal.fire({
            title: "Tem certeza?",
            text: "Ao clicar em sim a avaliação será enviada e a reclamação encerrada!",
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
        }).then(async (result) => {
            if (result.isConfirmed) {

                await sendAvaliation(props.reclamacao);

                Swal.fire({
                    title: "Enviada!",
                    text: "Avaliação enviada com sucesso",
                    icon: "success",
                    customClass: {
                        confirmButton: "custom-confirm-button-class",
                    },
                    buttonsStyling: false
                });
                props.handleCloseModal();

                return 0;
            }
        });
    }

    return (
        <StyledRank className="rank">
            {loading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                <ReactLoading type="spinningBubbles" color="black" />
            </div>)}
            <>
                <h2>Avalie a resposta da empresa</h2>
                <div className="rank-container">
                    <div className="rank-numbers">
                        {props.rank.map((item) => (
                            <StyledButtonRank rank={selectAvaliation == item}
                                key={item}
                                onClick={() => handleSelectRank(item)}
                            >
                                {item}
                            </StyledButtonRank>
                        ))}
                    </div>
                    <div className="rate">
                        <p>muito baixo</p>
                        <p>muito alto</p>
                    </div>
                </div>
                <div className="response-button">
                    <button className="send-button" onClick={(e) => handleSendRank(selectAvaliation)}>Enviar Avaliação</button>
                </div>
            </>
        </StyledRank>
    )
}