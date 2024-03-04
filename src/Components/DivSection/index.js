import React from "react";
import PropTypes from 'prop-types';
import { StyledSection } from "./style";

export default function DivSectionForm(props) {

    return (
        <StyledSection isValid={props.checkvalidator}>
            <label htmlFor={props.id}>{props.title}</label>
            <input
                placeholder={props.placeholder}
                id={props.id}
                type={props.type}
                onChange={props.onChange}
            />
        </StyledSection>
    );
}

DivSectionForm.propTypes = {
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,

};
