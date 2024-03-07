import styled from "styled-components";

export const StyledConfigCompany = styled.div`
    

    form{
        display: flex;
        flex-direction: column;
        gap: 1vh;
        padding: 0.5vh;

 
        button{

            width: 10vh;
            height: 3vh;
            font-size: 1.5vh;
            color: #fff;
            background-color: #212121;
            font-weight: 500;
            border-radius: 0.5vh;
            border: 0.2vh solid #212121;
            align-self: flex-end;
        }

        button:hover{
            opacity: 0.9;
            cursor: pointer;
        }


        .image-upload{

            display: flex;
            gap: 1vh;

            input[type="file"] {
                display: none;
            }

            div{                
                label{

                    text-align: center;
                    font-size: 1.5vh;
                    justify-content: center;
                    padding: 0.5vh 5vh;
                    font-weight: 500;
                    background-color: ${props => props.hasFile ? '#fff' : '#212121'};
                    color: ${props => props.hasFile ? '#212121' : '#fff'};
                    border: 0.2vh ${props => props.hasFile ? 'dashed' : 'solid'} #212121;
                    opacity: ${props => props.hasFile ? '0.5' : '1'};
                    border-radius: 0.5vh;
                    cursor: pointer;
                }
            }
        }

    }
`;