import styled from "styled-components";



export const StyledComplaint = styled.div`
   
    width: 52%;

    section{

        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;
        color: #212121;
        
        div{

            height: 100%;
            padding: 1rem;
            width: auto;
    

            p{
                display: flex;
                align-items: center;
                justify-content: center;
            }

            svg{
      
                width: 1.2rem;
                height: 1.2rem;
            }

            p:first-child{
                height: 35%;
                padding: 0.5rem;
                color: #9E9E9E;
                font-weight: 500;
            }
            p:last-child{
                height: 65%;
                font-weight: 700;
                font-size: 1.5rem;
                gap: 0.5rem;
            }
        }

        div:last-child{
           
            padding: 1rem;
            background-color: #F0F0F0;
            border-radius: 0.5rem;

            p:first-child{
                color: #212121;
                
            }

            span:last-child{
               
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                font-size: 1rem;
                padding: 0.2rem;
                border-radius: 0.5rem;
                gap:0.5rem;
            }
        }
        
    }

`;