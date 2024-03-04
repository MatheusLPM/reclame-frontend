import React from "react";
import { StyledCBodyComplaint } from "./style";


export default function ComplaintBody(props) {

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
        <StyledCBodyComplaint>
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