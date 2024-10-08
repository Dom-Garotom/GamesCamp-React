import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Poppin , sans-serif;
    }

    :root{
        font-size: 16px;
    }

    body{
        background-color: #000110;
    }

    p{
        max-width: 500px;
        min-width: 200px;
        width: 100%;
        color: #B9B6B6;
        font-size: 1.2rem;
        line-height: 26px;
    }

    b{
        color: #fff;
    }

    a{
        color: #fff;
        text-decoration: none;
        font-size: 1.2rem;
    }

    a:hover{
        color: #740FE9;
        text-decoration: underline;
        font-weight: 600;
    }

    img{
        max-width: 500px;
        width: 100%;
        border-radius: 8px;
    }


    @media screen and (max-width: 500px) {
        :root{
            font-size: 13px;
        }
    }
`;

export default GlobalStyles;