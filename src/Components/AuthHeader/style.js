import styled from "styled-components";



export const StyledAuthBody = styled.section`

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    column-gap: 1dvh;
    height: 100%;
    font-size: 1.5dvh;
    
    
    button{
    
        width: 5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        background-color: transparent;
        aspect-ratio: 1/1;

        svg{

            width:50%;
            height: 50%;
            color: red;
        }
    }

    div:nth-child(1){

        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #212121;
        border-radius: 1dvh;
        height: 4dvh;
        aspect-ratio: 1/1;
        
        svg{
            width: 60%;
            height: 60%;
            color: #fff;
        }
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;

    
        p:nth-child(1){
            font-weight: 600;
            color: #9E9E9E;
            font-size: 0.8rem;
            height: 50%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2dvh;
        }

        a{
            font-weight: 500;
            height: 50%;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-decoration: none;
            color: #212121;
            flex-wrap: nowrap;
            text-align: justify;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`;
