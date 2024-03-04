import styled from "styled-components";




export const StyledComplaintBody = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100vw;
    gap: 2vh;

    .loading{
        width: 100vw;
        min-height: 90dvh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

    }

    .modal{
        
        width: 55vw;
        display: flex;
        justify-content: flex-end;
        margin-top: 1dvh;

        .send-button{

            min-width: 10dvh;
            font-size: 1.5dvh;
            background-color: #000;
            color: white;
            border-radius: 0.5vh;
            border: none;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 500;
            padding: 1dvh 2vh;
            cursor: pointer;
        }
        .send-button:hover{
                
            background-color: #1A191A;
            opacity: 0.9;
        }
        
    }

    .desc{
        font-size: 1.5vh;
    }

    section{

        width: 55vw;
        

        article > p:last-child{
            margin-top: 1rem;
            text-align: justify;
        }

        article:nth-child(1){
            
            height: 3rem;
            display: flex;
            align-items: center;
            
            a{
                text-decoration: none;
                color: #212121;
                font-size: 1.5vh;
                display: flex;
                flex-direction: row;
                align-items: center;

                :hover{
                    opacity: 0.9;
                }
                
                span{

                    display: flex;
                    align-items: center;
                    width: 2vh;
                    aspect-ratio: 1/1;
                    
                    svg{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }

        article:nth-child(2){
        
            padding: 1vh;
            border-radius: 1vh;
            background-color: #FAFAFA;

            div:nth-child(1){
            
                justify-content: space-between;
                align-items: center;
                padding: 0.5dvh;

                h1{
                    font-size: 2vh;
                }
                p{
                    border-radius: 0.5dvh;
                    font-size: 1.5vh;
                    padding: 0.5vh 1vh;
                    
                }
            }

            div:nth-child(2){
        
                p{
                
                    margin: 0 0.5vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #9e9e9e;
                    font-weight: 400;
                    font-size: 1.5vh;

                    span{
                        
                        margin-right: 0.2rem;
                        font-weight: 700;
                        display: flex;
                        align-items: center;

                        svg{
                            width: 100%;
                            height: 100%;
                            padding-bottom: 0.1rem;
                        }
                    }
                }
            }

            div:nth-child(3){
            
                    padding: 1vh;
                    p{
                        padding: 0.5vh 1vh;
                        border-radius: 0.5vh;
                        background: #E0E0E0;
                        font-weight: 500;
                        font-size: 1.5vh;
                    }
                }
            }

        p{
            padding: 0.5vh;
            color: #484848;
        }

        div{
            display: flex;
            flex-direction: row;
        }

        
    }
`;


export const StyledModal = styled.div`
    width: 100dvw;
    height: 100dvh;

    position: fixed;

    display: grid;
    place-items: center;

    background-color: rgba(0, 0, 0, 0.15);

    top: 0%;
    left: 0%;

    form{
        border: 1px solid red;
        display: flex;
        flex-direction: column;
    }
`;