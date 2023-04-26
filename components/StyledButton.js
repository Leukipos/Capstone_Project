import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #546391;
  padding: 0.8rem;
 
  color: #EBE1CA;
  text-decoration: none;
  font-weight: bold;
  border: 0px;
  font-size: inherit;
  box-shadow: 0 0px 25px 2px #EBE1CA, 0 0px 5px 0px #ffffff, inset 0 0px 25px 2px #EBE1CA;

  margin-top: 20vh;

  :hover{
    cursor: pointer;
    background-color: #E1C8A7;
    color: green;
    transition: all 0.2s ease-in-out;
  }

  :active{
  box-shadow: 0 0 8px 0px #EBE1CA;
  transition: all 0.1s ease-in-out;
  }
  `