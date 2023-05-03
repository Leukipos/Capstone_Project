import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: sans-serif;
  }

  body {
    margin: 0;
    background-color: #7D9EAD;
    color: #E3D9C3;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
   }

  main{
    display: flex;
    justify-content: center;
  }
`