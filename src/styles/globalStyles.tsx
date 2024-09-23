import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    :root{
        font-size: 16px;
    }

    body{
        background-color: #000110;
    }


`;

export default GlobalStyles;