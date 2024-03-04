import styled from "styled-components";




export const BodyHome = styled.div`

    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100vh;
    gap: 1dvh;
    flex: 1;

    a{
        text-decoration: none;
    }
    
    section:last-child{
        width: 70dvw;
        display: flex;
        flex-direction: column;
        gap: 8dvh;
        
    }


    .loading{

        width: 100dvw;
        min-height: 90dvh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .ranking{
        
    }
`;


export const Helper = styled.section`

    background-color: #E7E7E7;
    display: flex;
    flex-direction: column;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

    }

    div:nth-child(1){
        margin-top: 1rem;
        
        h2{
            font-size: 2.5dvh;
        }
        p{
            font-size: 1.4dvh;
        }
    }

    div:nth-child(2){
        
        display: flex;
        flex-direction: row;
        height: 100%;
        padding: 1dvh;
        flex-wrap: wrap;

    }

    h2{
        font-weight: 700;
    }

    p{
        font-size: 1dvh;
        font-weight: 500;
        color: #989898;
    }
`;