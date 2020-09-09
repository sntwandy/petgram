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
    background-color: #fefefefe;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #app {
    box-shadow: 0px 0px 10px rgba(0,0,0,0.05);
    overflow-x: hidden;
    min-height:100vh;
    padding-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0px;
    padding: 0px;
  }

  ul {
    list-style: none;
    padding: 0px;
  }

  button {
    margin: 0px;
    background: transparent;
    border: 0px;
    outline: 0px;
  }
`;

export default GlobalStyles;
