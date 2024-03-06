import React, { useEffect, useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import ReactLoading from 'react-loading';
import { StyledComplaintBody } from "./style";
import { findChildrenComplaint, getUserAuth, showCompanyComplaints } from "../../Services/api";
import { newData, statusBackground, statusColor } from "../../Services/functionValidations";
import FormModal from "../../Components/FormModal";
import ResponseComplaint from "../../Components/Complaint/ResponseBody";
import Modal from "../../Components/Modal";
import Swal from "sweetalert2";
import { api } from "../../Services/server";

export default function ComplaintPage(props) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(true);
    const [complaint, setComplaint] = useState([]);
    const [user, setUser] = useState(null);
    // const [userType, setUserType] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [showChildren, setShowChildren] = useState([]);
    const [status, setStatus] = useState('');

    const updateChildren = async () => {
        try {

            const [complaintData, childrenData, userData] = await Promise.all([
                showCompanyComplaints(id),
                findChildrenComplaint(id),
                getUserAuth()
            ]);
            // console.log(complaintData.avaliacao.nota)
            setComplaint(complaintData);
            setShowChildren(childrenData);
            setStatus(complaintData.status_reclamacao.status);

            if (userData) {
                setUser(userData.user);
            }

            setIsLoading(false);
        } catch (error) {
            console.error('Erro', error);
        }
    }

    // console.log(complaint.categoria_reclamacao)

    useEffect(() => {
        setStatus(status);
    }, [status])

    useEffect(() => {
        updateChildren();
    }, [id]);

    const confirmCancel = async () => {
        try {
            const { data } = await api.delete(`reclamacao/cancel/${id}`);

            Swal.fire({
                title: "Cancelada!",
                text: "Reclamação cancelada com sucesso",
                icon: "success",
                customClass: {
                    confirmButton: "custom-confirm-button-class",
                },
                buttonsStyling: false
            });
        } catch (error) {
            return "erro";
        }
    };


    const handleCancelComplaint = () => {

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
        }).then(async (result) => {
            if (result.isConfirmed) {
                await confirmCancel();
                navigate(-1);
            }
        });
    };

    useEffect(() => {
        if (complaint == undefined) {
            navigate("/")
        }
    }, [complaint, navigate])

    const handleShowModal = () => {
        setShowModal(true)
    }
    const handleCloseModal = () => {
        setShowModal(false)
    }

    const handleButton = () => {
        if (localStorage.getItem('token') && (showChildren.length % 2 == 0) && (user.id == complaint.id_empresa)) {
            return (
                <div className="modal">
                    {showModal &&
                        <FormModal
                            handleCloseModal={handleCloseModal}
                            categoria={complaint.categoria_reclamacao.id}
                            empresa={complaint.id_empresa}
                            consumidor={complaint.id_consumidor}
                            pai={complaint.id}
                            onSubmit={updateChildren}
                        />
                    }
                    <button onClick={handleShowModal} className="send-button">Responder</button>
                </div>
            );
        } else if (localStorage.getItem('token') && (user.id == complaint.id_consumidor)) {

            if ((showChildren.length == 0)) {

                return (
                    <div className="modal">
                        <button className="send-button" onClick={() => handleCancelComplaint()}>Cancelar reclamação</button>
                    </div>
                )
            } else if (localStorage.getItem('token') && (user.id == complaint.id_consumidor) && (showChildren.length % 2 != 0)) {
                return (
                    <div className="modal">
                        {showModal &&
                            <Modal
                                handleCloseModal={handleCloseModal}
                                categoria={complaint.categoria_reclamacao.id}
                                empresa={complaint.id_empresa}
                                consumidor={complaint.id_consumidor}
                                pai={complaint.id}
                                onSubmit={updateChildren}
                            />
                        }
                        <button onClick={handleShowModal} className="send-button">Avaliar Resposta</button>
                    </div>
                )
            }
        }
    }

    const newStatus = () => {

        if (showChildren.length > 0) {
            return complaint.status = "Respondida";
        } else {
            return complaint.status;
        }
    }

    const handleFallback = () => {
        navigate(-1);
    }

    return (
        <StyledComplaintBody>
            {isLoading ? (
                <div className="loading">
                    <ReactLoading type="spinningBubbles" color="#E7E7E7" />
                </div>
            ) :
                <>
                    <section>
                        <article>
                            <Link onClick={() => handleFallback()} >
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1" />
                                    </svg>
                                </span>
                                <p>Voltar</p>
                            </Link>
                        </article>
                        {complaint.id_avaliacao != null ?
                            <article className="avaliation">
                                <div>
                                    <div className="star">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                    </div>
                                    <h2>Avaliação do consumidor</h2>
                                </div>
                                <div>
                                    <p
                                        newstatus={newStatus(complaint.id_status ? status : '')}
                                        style={{ color: statusColor(complaint.id_status ? status : ''), background: statusBackground(complaint.id_status ? complaint.status_reclamacao.status : ''), }}
                                    >{status}</p>
                                    <p
                                        style={{ color: Math.floor(complaint.avaliacao.nota) > 6 ? '#00A11A' : '#CE0000', background: Math.floor(complaint.avaliacao.nota) > 6 ? '#DDEDDF' : '#F1DDDD', }}
                                    >Nota: {complaint.avaliacao.nota ? Math.floor(complaint.avaliacao.nota) : ""}</p>
                                </div>
                            </article> : ""}
                        <article className="info">
                            <div>
                                <h1>{complaint.titulo}</h1>
                                <div>

                                    <p
                                        newstatus={newStatus(complaint.id_status ? status : '')}
                                        style={{ color: statusColor(complaint.id_status ? status : ''), background: statusBackground(complaint.id_status ? complaint.status_reclamacao.status : ''), }}
                                    >{showChildren.length > 0 ? status : complaint.status_reclamacao.status}</p>
                                </div>
                            </div>
                            <div>
                                <p>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4zM2.545 3h10.91c.3 0 .545.224.545.5v1c0 .276-.244.5-.546.5H2.545C2.245 5 2 4.776 2 4.5v-1c0-.276.244-.5.545-.5" />
                                        </svg>
                                    </span>
                                    {newData(complaint.created_at)}
                                </p>
                                <p>
                                    <span>ID:</span>
                                    {complaint.id}
                                </p>
                            </div>
                            <div>
                                <p>{complaint.categoria_reclamacao ? complaint.categoria_reclamacao.tipo : ''}</p>
                            </div>
                            <p className="desc">{complaint.descricao}</p>
                        </article>
                    </section>
                    {showChildren.map((item, index) => (
                        <ResponseComplaint
                            key={index}
                            title={item.titulo}
                            desc={item.descricao}
                            data={item.created_at}
                            isEven={index % 2 === 0}
                        />
                    ))}
                    {complaint.id_avaliacao == null ?
                        <div className="show-button">
                            {handleButton(showChildren, showModal)}
                        </div> :
                        ''
                    }

                </>}

        </StyledComplaintBody>
    );
}