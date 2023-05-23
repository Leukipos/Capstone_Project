
import styled from "styled-components";
import Link from "next/link"

const StyledHeadline = styled.h1`
    color: #334;
    font-size: 2.5rem;
    font-weight: 100;
    margin-top: 5rem;
`
const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #334;
`
const StyledLink = styled(Link)`
    display:flex;
    align-items: center;
    justify-content: center;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    background-color: #546391;
    color: #EBE1CA;
    text-decoration: none;
    font-weight: 100;
    box-shadow: 0 0 25px 2px #EBE1CA, 0 0 5px 0 #ffffff, inset 0 0 25px 2px #EBE1CA;
    margin-top: 20vh;
  :hover{
    cursor: pointer;
    background-color: #57925c;
    transition: all 0.2s ease-in-out;
  }
`
export default function LandingPage() {
  return(
    <StyledDiv>
        <StyledHeadline>take my hand</StyledHeadline>
        <p>hey.. schön dass du hier bist</p>
        <StyledLink href="/Module">
          los gehts...
      </StyledLink>
    </StyledDiv>
)
}


  