import React from "react";
import { StyledBodyEmpty } from "./style";

import PropTypes from 'prop-types';


export default function EmptyComplaint(props) {


    const newStringStatus = (() => {
        if (props.status === "Respondida") {
            return "respondidas"
        } else if (props.status === "Não Respondida") {
            return "não respondidas"
        } else {
            return props.status
        }
    })()

    return (
        <StyledBodyEmpty>
            <p>Sem reclamações {newStringStatus}</p>
        </StyledBodyEmpty>
    );
}

EmptyComplaint.propTypes = {
    status: PropTypes.string
}