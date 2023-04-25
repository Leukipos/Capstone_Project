import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
    background-color: #333;
    color: white;
    display: flex;
    justify-content: center;
    margin-top: 40vh;
  }
`;
