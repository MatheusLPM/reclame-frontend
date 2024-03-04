import styled from "styled-components";


export const StyledForm = styled.form`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    gap: 0.5rem;
    position: relative;
    
    div{
        width: 100%;
        display: flex;


    }

    label{
        padding: 0.5rem;
        display: block;
        width: 100%;
    }
    input{

        width: 97%;
        height: 3rem;
        border-radius: 0.5rem;
        border: 2px solid #E0E0E0;
        background-color: transparent;
        padding: 0.5rem;
        font-size: 1rem;
    }

    input:focus{
        outline: none;
        border: 0.3dvh solid #000;
    }

    input::placeholder{
        color: #9E9E9E ;
    }

    button{
        width: 97%;
        height: 3rem;
        color: #fff;
        background-color: #000;
        border-radius: 0.5rem;
        font-size: 1rem;
        border: none;
    }

    button:hover{
        cursor: pointer;
        opacity: 0.9;
    }

    @media (max-width: 520px) {
        div{
            display: block;
        }
    }
`;

export const DivSection = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 0.5rem;

    label{
        display: block;
        width: 100%;
    }
    input{
        width: 95%;
    }
`;