import styled from "styled-components";


export const StyledConsumerArea = styled.main`


    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    color: #212121;
    flex: 1;

    .loading{

        width: 100dvw;
        min-height: 90dvh;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    
    nav{
      
        min-width: 80dvw;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        justify-content: space-evenly;
        padding: 1.5dvh;
        font-size: 1.8dvh;     
        flex-wrap: wrap;
        gap: 1dvh;

    }

    .empty{
        margin-top: 15dvh;
        color: #989898;
        font-weight: 500;
    }

`;

export const StyledButton = styled.button`

    font-weight: 500;
    color: ${(props) => (props.$menu ? "#212121" : "#989898")};
    font-size: 1.6dvh;
    cursor: pointer;
    background-color: transparent;
    border: none;

`;
