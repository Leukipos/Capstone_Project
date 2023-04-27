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
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
 
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    list-style-type: none;
    padding: 0;
    margin-top: 100px;
    margin-bottom: 80px;
  }
`;
