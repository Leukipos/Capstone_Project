import Link from "next/link";
import styled from "styled-components";
import { useState } from 'react';


const StyledButton = styled(Link)`
z-index: 9999;
position: fixed;
top: 0.2rem;
right: calc(50% - 165px);
text-decoration: none;
color: #DDC;
font-size: 3rem;
:hover{
    cursor: pointer;
}
`
const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9995;
`
const StyledMenu = styled.ul`
    position: fixed;
    top: 2.3rem;
    right: calc(50% - 177px);
    z-index: 9999;
    list-style-type: none;
    opacity: 0.9;
    
`
const StyledMenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15rem;
    height: 4rem;
    background-color: #546391;
    color: #DDC;
    font-weight: 100;
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    border: 1px solid white;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }

`

export default function StyledMenuButton(){
    const [showOverlay, setShowOverlay] = useState(false);
    const handleMenuClick = () => {setShowOverlay(!showOverlay)}
  return (
    <div>
        {!showOverlay && <StyledButton href="#" onClick={handleMenuClick}>≡</StyledButton>}
        {showOverlay && 
            <>
            <StyledButton href="#" onClick={handleMenuClick}>≢</StyledButton>
            <StyledOverlay />
            <StyledMenu>
                <li><StyledMenuItem href="/main">Module</StyledMenuItem></li>
                <li><StyledMenuItem href="/intro">Einführung</StyledMenuItem></li>
                <li><StyledMenuItem href="/contacts">Kontakte</StyledMenuItem></li>
                <li> <StyledMenuItem href="/emergency">S.O.S</StyledMenuItem></li>
                <li><StyledMenuItem href="/about">About</StyledMenuItem></li>
            </StyledMenu>
            </>
        }
          
        

      
    </div>
  );
}
