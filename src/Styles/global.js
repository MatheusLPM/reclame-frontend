import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'inter', sans-serif;
    }
    
    body{
        background-color: #F0F0F0;
        display: flex;
        flex-direction: column;
        height: 100vh;
        color: #212121;

    };
`;

export default GlobalStyle;