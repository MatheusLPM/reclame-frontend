import styled from "styled-components";


export const BodyMenuCategory = styled.div`


    display: flex;
    flex-direction: row;
    overflow: hidden;
    width: 100%;
    margin: auto;
    position: relative;
    height: 15%;
    gap: 1dvh;
    align-items: center;

    .carousel {
        display: flex;
        flex-direction: row;
        width: 100%;
        overflow-y: hidden;
        scroll-behavior: smooth;
        scrollbar-width: none;
        gap: 1dvh;
        height: 4.5dvh;
        align-items: center;
        height: 100%;


    }

    .nav-button {

        font-size: 1.4dvh;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        outline: none;
        border-radius: 0.5dvh;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1/1;
        width: 3.8dvh;
    
        
    }

    .nav-button svg{
        width: 70%;
        height: 70%;
    }

    .nav-button:hover {
        opacity: 0.9;
        cursor: pointer;
        
    }

`;

export const StyledCategory = styled.button`

    border: 0.3vh solid ${(props) => (props.selected ? "black" : "#e7e7e7")};
    background-color: ${(props) => (props.isSelected ? "black" : "transparent")};
    color: ${(props) => (props.isSelected ? "#fff" : "#000")};
    border-radius: 1dvh;
    font-weight: 500;
    align-items: center;
    flex: none;
    padding: 1dvh;
    display: flex;
    align-items: center;
    justify-content: center; 
    font-weight: 500;
    font-size: 1.4dvh;
    height: 100%;

    :hover{
        cursor: pointer;
        opacity: 0.9;
    }

    :focus{
        background-color: #000;
        color: #fff;
    }


`;