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
    color: #323232;
    overflow-x: hidden;
  }

  .margin-center {
    margin: 0 auto;
  }

  .w-200 {
    width: 36rem;
  }

  .config-label {

  }

  .w-fit {
    width: fit-content;
  }

  .scrollTop {
    position: fixed; 
    bottom: 2rem;
    right: 2rem;
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
    opacity: 0.5;
    padding: 1rem;
    border-radius: 50%;
    background: #c5c5c5;

    :hover {
      opacity: 1;
    }
  }


  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export default GlobalStyle;
