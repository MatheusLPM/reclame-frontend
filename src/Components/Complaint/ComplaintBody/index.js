import React from "react";
import { StyledCBodyComplaint } from "./style";
import { statusBackground, statusColor } from "../../../Services/functionValidations";


export default function ComplaintBody(props) {

    return (
        <StyledCBodyComplaint>
            {props.tipo == 'consumidor' ?
                <div className="name-company">
                    <h3>Empresa: {props.nome_empresa}</h3>
                </div> :
                ""
            }
            <p>{props.title}</p>
            <p>{props.descricao}</p>
            <div>
                <p
                    style={{ color: statusColor(props.status), background: statusBackground(props.status) }}
                >{props.status}</p>
                <p>{props.data}</p>
            </div>
        </StyledCBodyComplaint>
    );
}