import styled from "styled-components";





export const BodyButtonHelper = styled.button`

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
   
    height: 8dvh;
    background-color: #fff;
    border-radius: 10px;
    border: 1px solid transparent;
    margin: 0.5rem;
    padding: 0rem 1rem;
    
    &:hover{
        cursor: pointer;
        color: #989898;
        border: 1px solid #000;
    }

    p{
        height: 80%;
        width: 6dvw;
        color: #000;
        font-size: 1.6dvh;
        text-align: left;
        display: flex;
        align-items: center;
        font-weight: 500;
    }

    span{

        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
   
    }

    svg{
        width: 2.3dvw;
        height: 2.3dvh;
        color: #989898;
    }

`;