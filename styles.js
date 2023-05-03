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

  .Dark{
    color: #334
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
  }

  ul{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem;
    list-style-type: none;
    padding: 0;
    margin-top: 5rem;
    margin-bottom: 4rem;
  }

  h1{
    color: #334;
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 5rem;
  }
`;
