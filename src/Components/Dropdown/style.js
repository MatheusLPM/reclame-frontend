import styled from "styled-components";




export const StyledDropdown = styled.select`


        border: 2px solid #E7E7E7;
        padding: 0 0.5rem;
        background-color: transparent;
        border-radius: 1dvh;
        color: ${(props) => (props.isSelected ? "#212121" : "#9e9e9e")};
        width: 10rem;

`;


export const StyledOption = styled.option`
    color: #9e9e9e;

`;