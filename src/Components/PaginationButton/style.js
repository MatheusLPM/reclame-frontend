import styled from "styled-components";

export const StyledPagination = styled.div`
    display: ${(props) => (props.isActive ? 'flex' : 'none')};
    flex-direction: row;
    gap: 1vh;
    
    .buttons {
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem;
        font-weight: 500;
        font-size: 1rem;
        color: #9E9E9E;
        background-color: transparent;
        border: none;
        cursor: pointer;
        height: 10%;
    }

    .buttons:hover {
        color: #212121;
    }
`;
