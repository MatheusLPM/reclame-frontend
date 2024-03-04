import React from "react";



import { Link } from "react-router-dom";

import { BodyEnter, CustomButton } from "./style";
import Logo from "../../Components/Logo";

export default function Entrar() {


    return (
        <BodyEnter>
            <section>
                <Logo />
                <p>Entre ou Crie uma Conta para Continuar</p>
                <div>
                    <Link to="/login">
                        <CustomButton styled="entrar">Entrar</CustomButton>
                    </Link>
                    <Link to="/register">
                        <CustomButton styled="registrar">Criar Conta</CustomButton>
                    </Link>
                </div>
            </section>
        </BodyEnter>
    );
}