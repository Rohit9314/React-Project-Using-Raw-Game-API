import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    html {
        &::-webkit-scrollbar {
            width:0.6rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
    }
    h2 {
        font-size: 2.5rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color:#ff6767;
    }
    h3{
        font-size: 1.3rem;
        color:#333;
        padding: 1.5rem 0rem;
 
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #696969;
        font-weight: bold;
    }
    a{
        text-decoration:none;
        color:#333;
    }
    img{
        display: block;
    }
`;
export default GlobalStyles;