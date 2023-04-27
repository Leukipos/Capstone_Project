import styled from "styled-components";
import Link from "next/link"


export const StyledLink = styled(Link)`
  display:flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  background-color: #546391;
  padding: 0.8rem;
  color: #EBE1CA;
  text-decoration: none;
  font-weight: bold;
  border: 0;
  font-size: 1.2rem;
  box-shadow: 0 0 25px 2px #EBE1CA, 0 0 5px 0 #ffffff, inset 0 0 25px 2px #EBE1CA;
  margin-top: 20vh;

  :hover{
    cursor: pointer;
    background-color: #57925c;
    transition: all 0.2s ease-in-out;
  }
`