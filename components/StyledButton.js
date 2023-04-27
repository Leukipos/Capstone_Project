import styled from "styled-components";

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
  font-size: 1.2rem;
  box-shadow: 0 0px 25px 2px #EBE1CA, 0 0px 5px 0px #ffffff, inset 0 0px 25px 2px #EBE1CA;
  margin-top: 20vh;

  :hover{
    cursor: pointer;
    background-color: #57925c;
    transition: all 0.2s ease-in-out;
  }
  `