import styled from "styled-components";

export const StyledConfig = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1vh;

    .accordion{

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60vw;
        background: none;
        border: none;
        outline: none;
        box-shadow: none;
        
        .summary{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            height: 3vh;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
            font-size: 1.5vh;
            font-weight: 500;
            border: 1px solid red;

            p{
                border: 1px solid red;
                margin-right: 1vh;
                display: flex;
                align-items: center;
            }
            
            .summaryIcon{
                width: 3vh;
                height: 3vh;
                aspect-ratio: 1/1;
                svg{
                    width: 100%;
                    height: 100%;
                }
            }

        }

        .details{
            margin-top: 1vh;
            width: 60vw;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
            font-size: 1.5vh;
            border: 1px solid red;

            label{
                
                display: flex;
                font-size: 1.5vh;
                align-items: center;

            }

            input{

                width: 100%;
                height: 2.5rem;
                border-radius: 0.5rem;
                border: 2px solid #E0E0E0;
                background-color: transparent;
                padding: 0.5rem;
                font-size: 1rem;
            }

            input:focus{
                outline: none;
                border: 0.3dvh solid #000;
            }

            input::placeholder{
                color: #9E9E9E ;
            }
            .desc{

                width: 100%;
                height: 30dvh;
                resize: none;
                min-height: 3.5dvh;
                border-radius: 0.8dvh;
                border: 0.3dvh solid #E0E0E0;
                background-color: transparent;
                padding: 0.5rem;
                font-size: 1rem;
                vertical-align: top;
                font-size: 1.5dvh;
            }

            .desc:focus{
                outline: none;
                border: 0.3dvh solid #000;
            }

            .desc::placeholder{
                color: #9E9E9E ;
            }
        }
    }
`;