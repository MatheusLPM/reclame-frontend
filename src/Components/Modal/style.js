import styled from "styled-components";



export const StyledModal = styled.div`

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
    z-index: 999;

    section{

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3vh;
        width: 55vh;
        padding: 2vh;
        background-color: #fff;
        border-radius: 1vh;
        
        h2{
            font-size: 2.5vh;
        }

        .button-close{

            width: 100%;
            justify-content: flex-end;

            svg{
                width: 100%;
                height: 100%;
            }

            button{
                width: 3.5vh;
                aspect-ratio: 1/1;
                font-weight: 700;
                background-color: transparent; 
                border: none;
                cursor: pointer;
            }
            button:hover{
                opacity: 0.5;
            }
        }

        .response-button{

            gap: 2vh;
            
            button{

                width: 18vh;
                height: 4vh;
                border-radius: 0.5vh;
                cursor: pointer;
            }

            button:hover{
                opacity: 0.9;
            }

            .response-button-no{
                background-color: transparent;
                border: 0.3vh solid #e7e7e7;
                border-radius: 0.5vh;
                color: #212121;
                font-size: 1.5vh;
                font-weight: 500;
            }
            .response-button-yes{
                background-color: #212121;
                border: 0.3vh solid #212121;
                border-radius: 0.5vh;
                color: #fff;
                font-size: 1.5vh;
                font-weight: 500;
            }
        }
    }
`;