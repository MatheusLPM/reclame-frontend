import React from "react";

import { StyledEmptyBody } from "./style";


export default function EmptyBody(props) {
    return (
        <StyledEmptyBody>
            {props.category == "Todos" ? <h3>Sem empresas</h3> : <h3>Sem empresas de "{props.category}"</h3>}
        </StyledEmptyBody>
    );
}