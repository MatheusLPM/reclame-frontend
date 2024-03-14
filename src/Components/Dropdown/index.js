import React, { useState } from "react";

import { StyledDropdown, StyledOption } from "./style";

export default function DropDown(props) {


    const [onSelected, setOnSelected] = useState("Todos")
    const [select, setSelect] = useState(false);

    const handleSelectChange = (e) => {
        setOnSelected(e.target.value);
        props.onSelectChange(e.target.value);
    };

    return (
        <StyledDropdown value={onSelected} onChange={handleSelectChange} isSelected={select} onClick={(e) => setSelect(true)}>
            <StyledOption value={props.value1} defaultValue className="placeholder">{props.value1}</StyledOption>
            <StyledOption value={props.value2} className="placeholder">{props.value2}</StyledOption>
            <StyledOption value={props.value3} className="placeholder">{props.value3}</StyledOption>
            <StyledOption value={props.value4} className="placeholder">{props.value4}</StyledOption>
            <StyledOption value={props.value5} className="placeholder">{props.value5}</StyledOption>
            <StyledOption value={props.value6} className="placeholder">{props.value6}</StyledOption>
        </StyledDropdown>
    );
}
