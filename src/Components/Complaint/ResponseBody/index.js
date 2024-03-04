import React from "react";
import { StyledResponseBody } from "./style";
import PropTypes from 'prop-types';
import { newData } from "../../../Services/functionValidations";


export default function ResponseComplaint(props) {
    return (
        <StyledResponseBody>
            <div className="titulo-data">
                <h1>{props.title}</h1>
                <p>
                    {newData(props.data)}
                </p>
            </div>
            <p>{props.desc}</p>
        </StyledResponseBody>
    )
}


ResponseComplaint.propTypes = {

    title: PropTypes.string,
    desc: PropTypes.string

}