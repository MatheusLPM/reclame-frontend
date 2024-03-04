import React from "react";

import { Link } from "react-router-dom";

import { StyledNotFound } from "./styles";

export default function NotFound(props) {
    return (
        <StyledNotFound>
            <section>
                <h1>Página não encontrada !</h1>
                <h3>Voltar para a Home?</h3>
                <Link to={`/`}>
                    <button>Voltar</button>
                </Link>
            </section>
        </StyledNotFound>
    );
}