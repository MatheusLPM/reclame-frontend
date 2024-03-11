import styled from "styled-components";


export const StyledBodyInfo = styled.article`

   
    
    flex: none;
    flex-direction: column;
    border-radius: 0.5rem;
    background-color: #fff;
    justify-content: space-evenly;
    color: #212121;
    border: 1px solid #fff;
    height: 100%;
    width: 25.95dvh;
    //aspect-ratio: 1/1;

    :hover{
        border: 1px solid #000;
    }

    div{
        width: 100%;
    }

    div:first-child{
        display: flex;
        flex-direction: row;
        height: 50%;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
        //width: 10dvh;
       
        img{
            
            width: 6vh;
            object-fit: contain;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 1vh;
            color: #fff;
            background: #EDEDED;
            font-weight: 700;
            padding: 1vh;
            aspect-ratio: 1/1;
            height: 100%;
        }

        p{
        
            width: 4rem;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: 700;
            font-size: 2dvh;
            
        }
    }

    div:last-child{

        height: 50%;


        p{
            height: 50%;
            display: flex;
            align-items: center;
            font-weight: 500;
            font-size: 1.4vh;
            padding-left: 1vh;
            gap: 0.5vh;

            span{
                
          
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                aspect-ratio: 1/1;

                svg{
                    width: 1.5vh;
                   
                }
            }
           
        }
    }
`;