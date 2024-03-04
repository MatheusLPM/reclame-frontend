import React from "react";
import styled from "styled-components";

export const BodyLogin = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;

    div {
        gap: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
    }

    div h1 {
        padding: 1rem 0rem;
        font-size: 3.5rem;
        width: 100%;
    }

    div p {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
        font-size: 1rem;
        color: #9E9E9E;
    }

    div form label {
        display: block;
        padding: 0.5rem;
        width: 100%;
        font-weight: 500;
        font-size: 1rem;
    }

    div form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 0.5rem;

    }

    div form input {
        border: 2px solid #E0E0E0;
        width: 95%;
        height: 3rem;
        border-radius: 0.5rem;
        background-color: transparent;
        padding: 0rem 0.5rem;
        font-weight: 500;
        font-size: 1rem;
    }

    div form input:focus {
        outline: none;
        border: 2px solid #000;
    }

    div form input::placeholder {
        color: #9E9E9E;
    }

    div form button {
        width: 95%;
        height: 3rem;
        margin-top: 1.5rem;
        color: #fff;
        background-color: #000;
        border-radius: 0.5rem;
        font-size: 1rem;
        font-weight: 500;
        border: none;
    }

    div form button:hover {
        opacity: 0.9;
        cursor: pointer;
    }

    form div{
        width: 100%;
    }

    @media (max-width: 520px) {
        div h1 {
            font-size: 2.5rem;
        }
    }
`;
