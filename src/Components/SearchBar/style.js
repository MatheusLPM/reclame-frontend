import styled from "styled-components";


export const StyledSearchBar = styled.div`

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 28vw;


        input{
            width: 100%;
            min-width: 28vw;
            height: 4vh;
            padding-right: 3rem;
            border: 2px solid #E7E7E7;
            border-radius: 5px;
            padding-left: 10px;
            display: flex;
            align-items: center;
            font-size: 1.4dvh
        }

        input:focus{
            border: 2px solid #000;
            outline: none;
        }
        input::placeholder{
            color: #9E9E9E;
            font-size: 1.4dvh;
        }
            
        span svg{

            position: absolute;
            color: #9E9E9E;
            right: 10px;
            bottom: 50%; 
            transform: translateY(50%); 
            width: 2dvw;
            height: 2dvh;
        }

        .perfil-link{

            position: absolute;
            top: calc(100% + 5px);
            left: 0;
            width: 100%;
            background-color: #fff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            z-index: 999;
            padding: 0.5rem;
            border-radius: 0.5rem;
        
        }

        .perfil-link p {

            width: 100%;
            padding: 0.5rem;
            background-color: #fff;
            color: #000;
            
            &:hover{
                background-color: #e7e7e7;
            }
        }

        .perfil-link a {
            text-decoration: none;
        }

        @media (max-width: 700px) {
            width: 50dvw;
            margin-left: 1dvh;
        }

`;