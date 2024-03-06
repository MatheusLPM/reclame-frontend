import styled from "styled-components";

const StyledBody = styled.article`

    
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    flex: none;
    display: flex;
    margin-bottom: 1rem;
    background-color: #f5f5f5;
    padding: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid #f5f5f5 ;
    overflow: hidden;
    color: #212121;

    &:hover{
        border: 1px solid #000;
    }

    .name-company{
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #212121;
    }

    p{
        text-align: justify;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }


    .title-subtitle{
        
        display: flex;
        flex-direction: column;
        gap: 1dvh;

        p:nth-child(1){
            width: 100%;
            font-weight: 500;
            color: #212121;


        }

        p:nth-child(2){
            font-weight: 400;
            color: #484848;
        }
    }
    

    div:nth-child(3){

        background-color: #f5f5f5;
        display: flex;
        flex-direction: row;
        gap: 1dvh;
       

        p:nth-child(1){
            border-radius: 0.2rem;
            padding: 0.2rem 0.5rem;
            font-weight: 400;

        }

        p:nth-child(2){
            display: flex;
            align-items: center;
            color: #9E9E9E;
        }

    }
`;

export default StyledBody;