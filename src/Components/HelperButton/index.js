import React from "react";
import PropTypes from "prop-types";

import { BodyButtonHelper } from "./style";


export default function HelperButton(props) {
    return (
        <BodyButtonHelper>
            <p>{props.title}</p>
            <span>{props.icon}</span>
        </BodyButtonHelper>
    );
}

HelperButton.propTypes = {
    title: PropTypes.string.isRequired
}

