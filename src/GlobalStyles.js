import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    font-size: 16px;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-size: 1em;
    font-family: 'Arial', sans-serif;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
  }
`;

export default GlobalStyles;
