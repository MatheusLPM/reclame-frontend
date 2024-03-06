import React from "react";
import { StyledCBodyComplaint } from "./style";
import { statusBackground, statusColor } from "../../../Services/functionValidations";


export default function ComplaintBody(props) {

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