import React from "react";
import { StyledCBodyComplaint } from "./style";


export default function ComplaintBody(props) {

    const statusColor = (status) => {

        console.log(status)
        if (status == "Aguardando") {
            return ('#212121');
        } else if (status == "Não Respondida") {
            return ('#CE0000');
        } else if (status == "Respondida") {
            return ('#00A11A');
        } else if (status == "Resolvido") {
            return ("#00A11A");
        }
    }
    const statusBackground = (status) => {
        if (status == "Aguardando") {
            return ('#E0E0E0');
        } else if (status == "Não Respondida") {
            return ('#F1DDDD');
        } else if (status == "Respondida") {
            return ('#DDEDDF');
        } else if (status == "Resolvido") {
            return ('#DDEDDF');
        };
    };

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