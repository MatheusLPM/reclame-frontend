import styled from "styled-components";




export const StyledRank = styled.section`

    display: flex;
    flex-direction: column;

    .rank-numbers{

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0.5vh;
    }

    .rate{

        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: #989898;
        font-size: 1.2vh;
        padding: 0 0.5vh;
    }

    .response-button{

        width: 100%;

        .send-button{
            width: 100%;
        }
    }
    
    .rank-container{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 1vh;
    }

`;


export const StyledButtonRank = styled.button`

        width: 3vh;
        aspect-ratio: 1/1;
        color: ${props => props.rank ? "#fff" : "#212121"};
        background-color: ${props => props.rank ? "#212121" : "#E0E0E0"};
        border-radius: 0.5vh;
        border: 0.2vh solid ${props => props.rank ? "#212121" : "#E0E0E0"};
        cursor: pointer;
        font-size: 1.2vh;

    &:hover{
            border: 0.2vh solid #212121;
    }
`;