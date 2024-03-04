import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1;
    align-items: center;
    margin-top: 1dvh;

    section:nth-child(1){

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 4dvh;
        width: 60dvw;

        h2{
            display: flex;
            align-items: center;
            font-size: 2.5dvh;
        }

        div{
            display: flex;
            flex-direction: row;
            position: relative;

            input{
                width: 25dvh;
                height: 100%;
                padding-right: 3rem;
                border: 2px solid #E7E7E7;
                border-radius: 10px;
                padding-left: 10px;
                background-color: transparent;
                margin-left: 1dvh;
                
            }

            input:focus{
                border: 2px solid #000;
                outline: none;
            }
            input::placeholder{
                color: #9e9e9e;
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
        }
    }

    section:nth-child(2){
        display: flex;
        flex-direction: column;
        width: 60dvw;
        background-color: #FAFAFA;
        margin: 1rem 0;
        border-radius: 1rem;
        padding: 1rem;
        overflow: hidden;
        position: relative;
        align-items: center;
        flex: 1;

        article{
            overflow-y: auto; 
            scroll-behavior: smooth;
            scrollbar-width: none;
            width: 100%;
            flex: 1;
            max-height: 76dvh;
        }
        a{
            text-decoration: none;
        }
    }

    button{
            display: flex;
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

            height: 4dvh;
        }
`;
