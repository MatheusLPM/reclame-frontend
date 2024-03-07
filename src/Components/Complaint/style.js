import styled from "styled-components";



export const StyledComplaint = styled.div`
   
    section{

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        color: #212121;
        flex-wrap: wrap;
        column-gap: 3vh;

        div{

            height: 100%;
            padding: 1.5vh;
    
            p{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg{
      
                width: 2vh;
                height: 2vh;
            }

            p:first-child{
                height: 35%;
                padding: 0.5vh;
                color: #9E9E9E;
                font-weight: 500;
            }
            p:last-child{
                height: 65%;
                font-weight: 700;
                font-size: 1.8vh;
                gap: 1vh;
            }
        }

        .classification{
           
            padding: 1vh 3vh;
            background-color: #F0F0F0;
            border-radius: 0.5vh;

            p:first-child{
                color: #212121;
                font-size: 100%;
            }

            span:last-child{
               
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 1.5vh;
                padding: 0.5vh;
                border-radius: 0.5vh;
                gap:0.5vh;
            }
        }

        @media (max-width: 937px) {
            .classification{
                display: none;
            } 
        }
    }
`;