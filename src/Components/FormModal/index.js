import React, { useEffect, useState } from "react";
import DivSectionForm from "../DivSection";
import { StyledFormModal } from "./style";
import { checkFormCompaint } from "../../Services/functionValidations";
import Swal from "sweetalert2";
import { api } from "../../Services/server";




export default function FormModal(props) {

    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");
    const [categoria, setCategoria] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [consumidor, setConsumidor] = useState("");
    const [pai, setPai] = useState("");


    useEffect(() => {
        setCategoria(String(props.categoria));
        setEmpresa(String(props.empresa));
        setConsumidor(String(props.consumidor));
        setPai(String(props.pai));
    }, []);

    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    //console.log({titulo:titulo,descricao:descricao,id_categoria:categoria,id_empresa:empresa,id_consumidor:consumidor,pai:pai})

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkFormCompaint(titulo, descricao, categoria)) {

            const formData = {
                titulo,
                empresa,
                descricao,
                categoria,
                consumidor,
                pai
            }

            try {

                const { data } = await api.post("resposta/reclamacao", formData)
                console.log(data)
                return Swal.fire({
                    icon: "success",
                    title: "Reclamação feita com sucesso!",
                    customClass: {
                        confirmButton: 'custom-confirm-button-class',
                    },
                }).then((result) => {
                    props.onSubmit()
                    props.handleCloseModal();

                });

            } catch (error) {

                const erro = normalizeError(error.response.data.message)
                console.log(erro)

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

    return (
        <StyledFormModal onClick={props.handleCloseModal}>
            <form className="form" onClick={(e) => { e.stopPropagation() }}>
                <DivSectionForm
                    title="Titulo"
                    placeholder="Titulo"
                    type="text"
                    value={titulo}
                    id="titulo"
                    onChange={(event) => setTitulo(event.target.value)}
                />

                <label htmlFor="descricao">Descrição</label>
                <textarea
                    maxLength="1500"
                    className="desc"
                    id="descricao"
                    placeholder="Descreva seu problema..."
                    onChange={(event) => setDescricao(event.target.value)}
                />
                <button onSubmit={handleSubmit} onClick={handleSubmit}>Enviar resposta</button>
            </form>
        </StyledFormModal>
    );
}