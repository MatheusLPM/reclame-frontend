
import styled from "styled-components";


export const StyledNotFound = styled.main`


    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 100vw;
    min-height: 93.5vh;
    overflow: hidden;

    section{
       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        h1{

            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-weight: 700;
        }

        h3{

            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            font-weight: 400;
        }

        a{
            width: 100%;
        }

        button{

            width: 100%;
            max-width: 20rem;
            height: 3rem;
            padding: 0.5rem;
            font-weight: 500;
            border: 2px solid #000;
            border-radius: 0.5rem;
            font-size: 1rem;
            font-weight: 500;
            color: #fff;
            background-color: #000;
            font-size: 1rem;

            &:hover {
                cursor: pointer;
                opacity: 0.9;
                
            }
        }
    }
`;

