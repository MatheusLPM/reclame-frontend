import styled from "styled-components";




export const StyledBodyRanking = styled.div`
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

`;

export const StyledInfoArticle = styled.article`

    width: 100%;
    height: 15dvh;
    display: flex;
    overflow-y: hidden;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
    scrollbar-width: none;
    gap: 1dvh;
    justify-content: ${(props) => (props.isEmpty ? 'center' : 'flex-start')};
    align-items: ${(props) => (props.isEmpty ? 'center' : 'none')};

    a{
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        display: none;
    }
    
`;