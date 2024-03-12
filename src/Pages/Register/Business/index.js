import React, { useState, useEffect } from "react";

import { StyledForm } from "../Person/style";
import { StyledSelect } from "./style";
import DivSectionForm from "../../../Components/DivSection";

import Swal from "sweetalert2";
import ReactLoading from 'react-loading';


import { api } from "../../../Services/server";

import { checkFormBusiness } from "../../../Services/functionValidations";
import { getCategorys, getEstate } from "../../../Services/api";
import { useNavigate } from "react-router-dom";


export default function Empresarial(props) {


    const [categorias, setCategorias] = useState([0]);
    const [estates, setEstates] = useState([0]);

    const [categoria, setCategoria] = useState("");
    const [nome, setNome] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cep, setCep] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [site, setSite] = useState("");

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()


    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    const normalizeCnpj = (cnpj) => {

        return cnpj.replace(/[^\d]+/g, '');
    }

    useEffect(() => {
        setCnpj(normalizeCnpj(cnpj));
    }, [cnpj]);


    useEffect(() => {
        const fetchDataCategory = async () => {
            try {
                const data = await getCategorys();
                setCategorias(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };

        const fetchDataEstate = async () => {
            try {
                const data = await getEstate();
                setEstates(data);
            } catch (error) {
                console.error('Erro ao buscar categorias:', error);
            }
        };
        fetchDataEstate();
        fetchDataCategory();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkFormBusiness(nome, categoria, cnpj, cep, cidade, estado, email, senha, site)) {
            const formData = {
                nome,
                categoria,
                cnpj,
                cep,
                cidade,
                estado,
                email,
                senha,
                site,
            };
            console.log(formData)


            try {
                setLoading(true)
                const { data } = await api.post("register/empresa", formData)

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

                    navigate('/company')
                })

            } catch (error) {

                //console.error(error.response.data.message);
                //console.error(error.response.status);

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
                title="Nome da Empresa"
                placeholder="Nome da Empresa..."
                type="text"
                id="nome"
                onChange={(event) => setNome(event.target.value)}
            />

            <label htmlFor="categoria">Categoria da Empresa</label>
            <StyledSelect>
                <select
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                >
                    <option value="" disabled defaultValue hidden className="placeholder">Selecionar</option>
                    {categorias.map((categoria, index) => (
                        <option key={index} value={categoria.id}>{categoria.categoria}</option>
                    ))}
                </select>
            </StyledSelect>


            <div>
                <DivSectionForm
                    title="CNPJ"
                    placeholder="CNPJ..."
                    type="text"
                    id="cnpj"
                    onChange={(event) => setCnpj(event.target.value)}
                />

                <DivSectionForm
                    title="CEP"
                    placeholder="CEP..."
                    type="text"
                    id="CEP"
                    onChange={(event) => setCep(event.target.value)}
                />
            </div>

            <div>
                <DivSectionForm
                    title="Cidade"
                    placeholder="Cidade..."
                    type="text"
                    id="cidade"
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
                title="E-mail da Empresa"
                placeholder="E-mail da Empresa..."
                type="email"
                id="email"
                onChange={(event) => setEmail(event.target.value)}
            />

            <DivSectionForm
                title="Senha"
                placeholder="Senha..."
                type="password"
                id="senha"
                onChange={(event) => setSenha(event.target.value)}
            />

            <DivSectionForm
                title="Site da Empresa"
                placeholder="Link do Site.com.br...(Opcional)"
                type="text"
                id="site"
                onChange={(event) => setSite(event.target.value)}
            />

            <button>Criar Conta</button>

        </StyledForm>
    );
}