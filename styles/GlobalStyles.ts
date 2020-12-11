import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Varela Round', sans-serif;
  }

  .margin-center {
    margin: 0 auto;
  }

  .w-128 {
    width: 24rem;
  }

  .w-fit {
    width: fit-content;
  }
`;

export default GlobalStyle;
