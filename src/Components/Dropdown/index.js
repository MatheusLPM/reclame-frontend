import React, { useState } from "react";

import { StyledDropdown } from "./style";

export default function DropDown(props) {


    const [onSelected, setOnSelected] = useState("Todos")

    const handleSelectChange = (e) => {
        setOnSelected(e.target.value);
        props.onSelectChange(e.target.value);
    };

    return (
        <StyledDropdown>
            <select value={onSelected} onChange={handleSelectChange}>
                <option value={props.value1} defaultValue className="placeholder">{props.value1}</option>
                <option value={props.value2} className="placeholder">{props.value2}</option>
                <option value={props.value3} className="placeholder">{props.value3}</option>
                <option value={props.value4} className="placeholder">{props.value4}</option>
                <option value={props.value5} className="placeholder">{props.value5}</option>
                <option value={props.value6} className="placeholder">{props.value6}</option>
            </select>
        </StyledDropdown>
    );
}
