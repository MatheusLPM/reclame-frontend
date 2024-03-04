import styled from "styled-components";



export const BodyEnter = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    
    section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
     
        width: 90%; 
        max-width: 400px; 
    }

    p {
        font-size: 1rem;
        color: #9E9E9E;
      
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        gap: 1rem;
        

        a {
         
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-decoration: none;
        }
    }

    h1 {
        font-size: 3rem;
    }

    @media (max-width: 520px) {
        transform: scale(0.8);
    }
`;



export const CustomButton = styled.button`
    width: 100%;
    max-width: 20rem;
    height: 3rem;
    padding: 0.5rem;
    font-weight: 500;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ styled }) => (styled === 'entrar' ? '#fff' : '#000')};
    background-color: ${({ styled }) => (styled === 'entrar' ? '#000' : 'transparent')};
    border: 2px solid ${({ styled }) => (styled === 'entrar' ? '#000' : '#9E9E9E')};

    &:hover {
        cursor: pointer;
        opacity: 0.9;
        border: 2px solid #000;
    }
`;
