import styled from "styled-components";


export const BodyHeader = styled.header`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 0.5rem 0rem;
    width: 100%;
    height: 5dvh;

    a{
        text-decoration: none;
        color: #212121;
    }

    a:hover{
        opacity: 0.9;
    }

    
        h1{
            font-weight: 400;
        }
            h1 span{
            font-weight: bold;
        }

        a button{
            border: none;
            height: 100%;
            font-size: 1.5dvh;
            background-color: #000;
            color: white;
            gap: 10px;
            padding: 10px;
            border-radius: 10px;
        }
        a button:hover{
            cursor: pointer;
            background-color: #1A191A;
        }

        @media (max-width: 700px) {
            justify-content: space-evenly;
            

            #search{
                width: 100%;
            }

            div:nth-child(1){
                display: none;
            }
        }

`;