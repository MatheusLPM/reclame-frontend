import React from "react";
import StyledBody from "./style"
import { statusBackground, statusColor } from "../../../Services/functionValidations";

export default function ComplaintUserBody(props) {

    return (
        <StyledBody>
            {props.nome_empresa ?
                <div className="name-company">
                    <h3>Empresa: {props.nome_empresa}</h3>
                </div> :
                ""
            }
            <div className="title-subtitle">
                <p>{props.title}</p>
                <p>{props.descricao}</p>
            </div>
            <div>
                <p
                    style={{ color: statusColor(props.status), background: statusBackground(props.status) }}
                >{props.status}</p>
                <p>{props.data}</p>
            </div>
        </StyledBody>
    );
}