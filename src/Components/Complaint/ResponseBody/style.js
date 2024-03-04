import styled from "styled-components";



export const StyledResponseBody = styled.div`

    
    /* background-color: ${props => props.isEven ? '#E7E7E7' : '#fff'}; */
    background-color: #E7E7E7;
    display: flex;
    flex-direction: column;
    width: 55vw;
    border-radius: 1dvh;
    padding: 1.5dvh;
    gap: 1.5dvh;
    //border: 1px solid red;


    h1{
        //border: 1px solid red;
        font-size: 2dvh;
        word-break: break-all;
    }
    p{
        //border: 1px solid red;
        font-size: 1.5dvh;
        font-weight: 400;
        text-align: justify;
        word-break: break-all;

    }
    .type{
        color: #9E9E9E;
    }
    .titulo-data{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        p{
            color: #9E9E9E;
            height: 100%;
            
        }

    }

    @media (max-width: 350px){
        .titulo-data{
            display: block;

            h1{
                margin-bottom: 1vh;
            }
        }
    }

    @media(max-width: 1192px){
        div:nth-child(1){
            
            display: flex;
            flex-direction: column;

            gap: 1vh;
            p{
                width: 100%;
            }
            h1{
                width: 100%;
            }
        }
    }
`;