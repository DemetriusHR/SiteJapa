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
    overflow-x: hidden !important;
    font: 15px 'pack3-b', Helvetica, Arial, Sans-Serif;
    background-repeat: repeat;
    background-image: url(data:image/png;base64,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);
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
    animation: fadeIn 0.3s;
    transition: opacity 0.4s;
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
