import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: serif;
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  body {
    margin: 0;
    background-color: #7D9EAD;
    color: #E3D9C3;
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    margin-top: 20vh;
 
  }
`;
