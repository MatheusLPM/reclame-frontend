import styled from "styled-components";



export const BodyPerfil = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #212121;
    flex: 1;
    min-height: 100%;

    .principal-container{
        width: 70%;
        height: 100%;
    }

    .loading{

        width: 100dvw;
        height: 90vh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .search-area{

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1rem;
        align-items: center;


        div{
          
            display: flex;
            flex-direction: row;
            position: relative;
    
            input{
                width: 30dvh;
                height: 2.5rem;
                padding-right: 3rem;
                border: 2px solid #E7E7E7;
                border-radius: 10px;
                padding-left: 10px;
                background-color: transparent;
                margin-left: 1rem;
                
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
                color: #9E9E9E;;
                right: 0.5rem;
                bottom: 0.7rem;
                width: 1.2rem;
                height: 1.2rem;
            }
        }
    }


    header{

        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        background-color: #FAFAFA;
        border-radius: 1rem;
        margin-top: 1rem;

        article:nth-child(1){

            display: flex;
            flex-direction: row;
            justify-content: space-between;

            img{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 10vh;
                height: 100%;
                margin-right: 1rem;
                color: white;
                font-size: 1.5rem;
                border-radius: 0.5rem;
                padding: 0.5rem;
                background: #EDEDED;
                aspect-ratio: 1/1;
            }
        }
        article:nth-child(2){
     
            display: flex;
            flex-direction: column;
            gap: 0.5rem;

            p{
                width: 100%;
                word-break: break-all;

                
                &:first-child{
                    font-weight: 500;
                }

                &:last-child{
                    font-weight: 400;
                    text-align: justify;
                    word-break: break-all;
                    color: #484848;
                }
            }
        }
    }

    section:nth-child(3){

        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #FAFAFA;
        margin: 1vh 0;
        border-radius: 1vh;
        padding: 1.5vh;
        overflow: hidden;
        max-height: ${(props) => (props.isActive ? "100vh" : "36rem")};
        gap: 1rem;
        position: relative;
        align-items: center;

        
        .complaints{
            overflow-x: hidden;
            scroll-behavior: smooth;
            scrollbar-width: none;
            width: 100%;
            height: 90%;
        }

        a{
            text-decoration: none;
        }

        .plus{

            display: ${(props) => (props.isActive ? 'none' : 'flex')};
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
            height: 10%;
        }

    }

    @media (max-width: 1500px) {
        header{
            article:nth-child(1){
                flex-direction: column;
                row-gap: 2vh;
            }
        }        
    }

    @media (max-width: 813px) {
        .search-area{
            flex-direction: column;

            h2{
                width: 100%;
            }
            div{
                width: 100%;
            }
        }
    }

    @media (max-width: 505px) {
        .search-area{
            div{
                flex-direction: column;

                input{
                    width: 100%;
                    margin-left: 0;
                }

                select{
                    height: 2rem;
                }
            }
        }
    }
`;

export const StyledPerfilInfo = styled.div`

    display: flex;
    flex-direction: row;

    img{
        object-fit: contain;
    }

    div{
     
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-size: 1rem;

        h2{
            font-weight: 700;
        }
        p{
            color: #9E9E9E;
            font-weight: 500;
        }
        a{
            color: #9E9E9E;
            text-decoration: none;

            &:hover{
                opacity: 0.9;
            }
        }
    }

`;
