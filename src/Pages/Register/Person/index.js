import React from "react";
import { useState, useEffect } from "react";

import { StyledForm } from "./style";
import { StyledSelect } from "../Business/style";
import DivSectionForm from "../../../Components/DivSection";


import ReactLoading from 'react-loading';
import Swal from 'sweetalert2'

import { api } from "../../../Services/server";

import { getEstate } from "../../../Services/api";

import { checkData, checkForm } from "../../../Services/functionValidations";
import { useNavigate } from "react-router-dom";


export default function Person(props) {

    const navigate = useNavigate();

    const [estates, setEstates] = useState([0]);

    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [data, setData] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const [loading, setLoading] = useState(false);


    const normalizeCpf = (cpf) => {
        return cpf.replace(/[^\d]/g, '')
    }
    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    useEffect(() => {
        setCpf(normalizeCpf(cpf));
    }, [cpf]);

    useEffect(() => {

        const fetchDataEstate = async () => {
            try {
                const data = await getEstate();
                setEstates(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        fetchDataEstate();
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkForm(nome, cpf, email, data, cep, cidade, estado, senha)) {

            const formData = {
                nome,
                cpf,
                data,
                cep,
                cidade,
                estado,
                email,
                senha,
            };


            try {
                setLoading(true)
                const { data } = await api.post("register", formData)

                const token = data.authorization.token

                localStorage.setItem('token', token)

                setLoading(false)
                return Swal.fire({
                    icon: "success",
                    title: "Conta criada com sucesso!",
                    text: "Seja bem-vindo",
                    customClass: {
                        confirmButton: 'custom-confirm-button-class',
                    },
                }).then((result) => {

                    navigate('/consumer')
                });

            } catch (error) {

                const erro = normalizeError(error.response.data.message)
                console.log(erro)

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
            console.log("Error")
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>

            {loading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                <ReactLoading type="spinningBubbles" color="black" />
            </div>)}

            <DivSectionForm
                title="Nome"
                placeholder="Nome..."
                type="text"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                id="nome"

            />

            <div>
                <DivSectionForm
                    title="CPF"
                    placeholder="CPF..."
                    type="text"
                    value={cpf}
                    onChange={(event) => setCpf(event.target.value)}
                    id="cpf"

                />

                <DivSectionForm
                    title="Data de Nascimento"
                    placeholder=""
                    type="date"
                    id="date"
                    value={data}
                    onChange={(event) => setData(event.target.value)}
                />
            </div>
            <DivSectionForm
                title="CEP"
                placeholder="CEP..."
                type="text"
                id="CEP"
                onChange={(event) => setCep(event.target.value)}
            />
            <div>
                <DivSectionForm
                    title="Cidade"
                    placeholder="Cidade..."
                    type="text"
                    id="cidade"
                    value={cidade}
                    onChange={(event) => setCidade(event.target.value)}

                />

                <div style={{ display: "flex", flexDirection: "column" }}>
                    <label htmlFor="estado">Estado</label>
                    <StyledSelect>
                        <select
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                        >
                            <option value="" disabled defaultValue hidden className="placeholder">Selecionar</option>
                            {estates.map((estates, index) => (
                                <option key={index} value={estates.id}>{estates.uf}</option>
                            ))}
                        </select>
                    </StyledSelect>
                </div>
            </div>

            <DivSectionForm
                title="E-mail"
                placeholder="E-mail..."
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}

            />
            <DivSectionForm
                title="Senha"
                placeholder="Senha..."
                type="password"
                id="senha"
                value={senha}
                onChange={(event) => setSenha(event.target.value)}

            />

            <button >Criar Conta</button>

        </StyledForm>
    );
}