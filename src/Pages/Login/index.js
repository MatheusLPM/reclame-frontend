import React from "react";
import { useState } from "react";

import Logo from "../../Components/Logo";

import { BodyLogin } from "./style";

import ReactLoading from 'react-loading';
import DivSectionForm from "../../Components/DivSection";

import Swal from "sweetalert2";
import { api } from "../../Services/server";

import { checkLogin } from "../../Services/functionValidations";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const [loading, setLoading] = useState(false);

    const navigate = useNavigate()

    function normalizeError(erro) {

        return erro.replace(/\([^)]*\)/g, '');
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (checkLogin(email, senha)) {

            const formData = {
                email,
                password: senha
            };

            try {

                setLoading(true);

                const { data } = await api.post("auth/login", formData);

                const token = data.authorization.token;

                localStorage.setItem('token', token)

                setLoading(false);

                return data.user_type == "consumidor" ? navigate('/consumer') : navigate('/company');
            } catch (error) {

                const erro = normalizeError(error.response.data.message)
                console.log(erro)

                setLoading(false)
                return Swal.fire({
                    icon: "error",
                    text: erro,
                })
            }
        }
    };

    return (

        <BodyLogin>
            <div>
                <Logo />
                <p>Faça o Login para Continuar</p>
                <form onSubmit={handleSubmit}>

                    {loading && (<div style={{ position: "fixed", height: "100dvh", width: "100dvw", top: "0", left: "0", zIndex: "5", backgroundColor: "#212121", display: "grid", placeItems: "center", opacity: 0.5 }}>
                        <ReactLoading type="spinningBubbles" color="black" />
                    </div>)}
                    <DivSectionForm
                        title="Email"
                        placeholder="Email..."
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        id="email"

                    />
                    <DivSectionForm
                        title="Senha"
                        placeholder="Senha..."
                        type="password"
                        value={senha}
                        onChange={(event) => setSenha(event.target.value)}
                        id="senha"

                    />

                    <button type='submit'>Entrar</button>
                </form>
            </div>

        </BodyLogin>
    );
}