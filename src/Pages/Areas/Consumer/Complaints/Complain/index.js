import React, { useEffect, useState } from "react";
import { getComplaintCat, getStatusComplaint, getUserAuth, showCompany } from "../../../../../Services/api";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { StyledComplainForm } from "./style";
import DivSectionForm from "../../../../../Components/DivSection";
import { checkFormCompaint } from "../../../../../Services/functionValidations";
import ReactLoading from 'react-loading';
import { api } from "../../../../../Services/server";
import Swal from "sweetalert2";


export default function Complain(props) {

    const { id } = useParams();
    const navigate = useNavigate();

    const [company, setCompany] = useState([]);
    const [complaintCat, setComplaintCat] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [consumidor, setConsumidor] = useState("");

    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [dataCompany, dataConsumer] = await Promise.all([
                    showCompany(id),
                    getUserAuth()

                ]);
                setCompany(dataCompany)
                setConsumidor(dataConsumer.user.id)
            } catch (error) {
                console.error('Erro', error)
                return Navigate('/')
            }
        };

        fetchData();
    }, [id]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkFormCompaint(titulo, descricao, categoria)) {

            const formData = {
                titulo,
                empresa: company.id,
                descricao,
                categoria,
                consumidor: consumidor
            }

            try {
                setLoading(true)

                const { data } = await api.post("reclamacao", formData)

                setLoading(false)

                return Swal.fire({
                    icon: "success",
                    title: "Reclamação feita com sucesso!",
                    customClass: {
                        confirmButton: 'custom-confirm-button-class',
                    },
                }).then((result) => {

                    navigate(`/perfil/empresa/${company.id}`)
                });

            } catch (error) {

                const erro = normalizeError(error.response.data.message)
                setLoading(false)

                return Swal.fire({
                    icon: "error",
                    text: erro,
                    customClass: {
                        confirmButton: 'custom-confirm-button-class',
                    },
                })
            }

        } else {
            console.log("erro")
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [categoryData] = await Promise.all([
                    getComplaintCat(),
                ]);
                setComplaintCat(categoryData);
            } catch (error) {
                console.error('Erro', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {isLoading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                <ReactLoading type="spinningBubbles" color="black" />
            </div>)}
            <StyledComplainForm onSubmit={handleSubmit}>
                <div>
                    <h1>Conte sua história</h1>
                    <p>Descreva seu problema com {company ? company.nome : ''}</p>
                </div>
                <div>
                    <DivSectionForm
                        title="Nome"
                        placeholder="Titulo da reclamação..."
                        type="text"
                        id="nome"
                        onChange={(event) => setTitulo(event.target.value)}
                        maxLength="5"
                    />

                    <label htmlFor="descricao">Descrição</label>
                    <textarea
                        maxLength="1500"
                        className="desc"
                        id="descricao"
                        placeholder="Descreva seu problema..."
                        onChange={(event) => setDescricao(event.target.value)}
                    />

                    <label htmlFor="categoria">Categoria da reclamação</label>
                    <select
                        value={categoria}
                        onChange={(event) => setCategoria(event.target.value)}
                    >
                        <option value="" disabled defaultValue hidden>Selecionar</option>
                        {complaintCat.map((item, index) => (
                            <option className="select-options" key={index} value={item.id}>{item.tipo}</option>
                        ))}
                    </select>
                </div>
                <button>Enviar Reclamação</button>
            </StyledComplainForm>
        </>
    )
}