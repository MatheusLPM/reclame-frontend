import styled from "styled-components";



export const BodyPerfil = styled.main`

    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #212121;
    flex: 1;
    min-height: 100%;

    section{
        width: 70%;
    }

    .loading{

        width: 100dvw;
        min-height: 90dvh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    section:nth-child(2){

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 1rem;

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

    article:nth-child(2){
     
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        p{
            width: 100%;    
            
            &:first-child{
                font-weight: 500;
            }

            &:last-child{
                font-weight: 400;
                text-align: justify;
                color: #484848;
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
            height: 6rem;

            img{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 6rem;
                margin-right: 1rem;
                color: white;
                font-size: 1.5rem;
                border-radius: 0.5rem;
                padding: 0.5rem;
                background: #EDEDED;
            }
            
        }
    }

    section:nth-child(3){

        display: flex;
        flex-direction: column;
        width: 100%;
        background-color: #FAFAFA;
        margin: 1rem 0;
        border-radius: 1rem;
        padding: 1rem;
        overflow: hidden;
        max-height: 36rem;
        gap: 1rem;
        position: relative;
        align-items: center;
        
        article{
            overflow-x: hidden;
            scroll-behavior: smooth;
            scrollbar-width: none;
            width: 100%;
        
        }

        a{
            text-decoration: none;
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
        }
    }
`;

export const StyledPerfilInfo = styled.div`

    display: flex;
    flex-direction: row;
   

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
