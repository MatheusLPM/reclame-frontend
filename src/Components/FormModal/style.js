import styled from "styled-components";



export const StyledFormModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100dvw;
    height: 100dvh;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.15);

    top: 0%;
    left: 0%;

    label{
        padding: 1dvh;
        display: block;
        width: 100%;
        font-size: 1.5dvh;
        font-weight: 500;
    }
    input{

        width: 100%;
        min-height: 3.5dvh;
        border-radius: 0.8dvh;
        border: 0.3dvh solid #E0E0E0;
        background-color: transparent;
        padding: 1dvh;
        vertical-align: top;
        font-size: 1.5dvh;
    }

    label{
        display: block;
        width: 100%;
        padding: 0;
    }


    input:focus{
        outline: none;
        border: 0.3dvh solid #000;
    }

    input::placeholder{
        color: #9E9E9E ;
    }

    button{
        width: 18dvh;
        height: 4dvh;
        font-size: 1.5dvh;
        cursor: pointer;
        align-self: flex-end;
        color: #fff;
        background-color: #000;
        border: none;
        border-radius: 1dvh;
        margin-top: 3dvh;
    }

    button:hover{
        opacity: 0.9;
    }

    .desc{

        width: 100%;
        height: 30dvh;
        resize: none;
        min-height: 3.5dvh;
        border-radius: 0.8dvh;
        border: 0.3dvh solid #E0E0E0;
        background-color: transparent;
        padding: 0.5rem;
        font-size: 1rem;
        vertical-align: top;
        font-size: 1.5dvh;
    }

    .desc:focus{
        outline: none;
        border: 0.3dvh solid #000;
    }

    .desc::placeholder{
        color: #9E9E9E ;
    }

    form{

        display: flex;
        flex-direction: column;
        background-color: #fff;
        padding: 2dvh;
        margin: 2dvh;;
        border-radius: 1dvh;
        width: 80dvh;
        gap: 1dvh;

        div:nth-child(1){
            display: flex;
            flex-direction: column;
        }
    }
`;