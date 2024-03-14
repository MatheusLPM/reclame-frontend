import React from "react";

import { Link } from "react-router-dom";

import { BodyHeader } from "./style";
import Logo from "../Logo";
import AuthHeader from "../AuthHeader";

import SearchBar from "../SearchBar";


export default function Header(props) {
    return (
        <BodyHeader>
            <Link to="/">
                <Logo />
            </Link>
            <SearchBar searchBarRef={props.searchBarRef} prefix="/perfil/empresa" />
            {localStorage.getItem("token") ? (
                <AuthHeader tipo={props.tipo} nome={props.nome} />
            ) : (
                <Link to="/enter">
                    <button>Entrar/Criar Conta</button>
                </Link>
            )}
        </BodyHeader>
    );
}