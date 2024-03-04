import styled from "styled-components";



export const StyledHeader = styled.header`

    width: 100%;
    height: 3dvh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 2dvh;

    div{

        display: flex;
        flex-direction: row;
        align-items: center;
        font-weight: 700;
        color: #000;
        gap: 1dvh;
    }

    div h1{
        font-size: 2dvh;
    }

    div h2{
        font-size: 2dvh;
        color: #9e9e9e;
    }

    button {

        border: 1px solid #989898;
        height: 100%;
        width: 3dvh;
        cursor: pointer;
        color: #989898;
        background-color: transparent;
        border-radius: 0.5dvh;
        outline: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    button:hover{
        opacity: 0.9;
        background-color: #000;
        border: 1px solid #000;
        color: #FFF;
    }


    @media(max-width:660px){
        div:nth-child(1){
            h2{
                display: none;
            }
        }
    }
`;