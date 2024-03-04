import React from "react";
import StyledBody from "./style"

export default function ComplaintUserBody(props) {

    const statusColor = (status) => {
        if (status == "Aguardando") {
            return ('#212121')
        } else if (props.status == "Não Respondida") {
            return ('#CE0000')
        } else {
            return ('#00A11A')
        }
    }
    const statusBackground = (status) => {
        if (status == "Aguardando") {
            return ('#E0E0E0')
        } else if (props.status == "Não Respondida") {
            return ('#F1DDDD')
        } else {
            return ('#DDEDDF')
        }
    }
    return (
        <StyledBody>
            <div>
                <h3>Empresa: {props.nome_empresa}</h3>
            </div>
            <div>
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