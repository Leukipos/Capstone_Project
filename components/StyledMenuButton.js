import { useRouter } from 'next/router';
import Link from "next/link";
import styled from "styled-components";
import { useState } from 'react';

const StyledButton = styled.button`
z-index: 9999;
position: fixed;
top: 0.2rem;
right: calc(50% - 165px);
text-decoration: none;
color: #DDC;
font-size: 3rem;
background: none;
border: none;
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
    height: 3.3rem;
    background-color: ${(props) => (props.isActive ? '#EBE1CA' : '#546391')};
    color: ${(props) => (props.isActive ? '#334' : '#DDC')};
    font-weight: 100;
    font-size: 1.1rem;
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
    const handleMenuClick = () => {setShowOverlay(!showOverlay)};
    const router = useRouter();
  return (
    <div>
        {!showOverlay && <StyledButton onClick={handleMenuClick}>≡</StyledButton>}
        {showOverlay && 
            <>
            <StyledButton onClick={handleMenuClick}>≢</StyledButton>
            <StyledOverlay />
            <StyledMenu>
                <li><StyledMenuItem href="/" isActive={router.pathname === '/'}>Startseite</StyledMenuItem></li>
                <li><StyledMenuItem href="/Module" isActive={router.pathname === '/Module'}>Module</StyledMenuItem></li>
                <li><StyledMenuItem href="/Einfuehrung" isActive={router.pathname === '/Einfuehrung'}>Einführung</StyledMenuItem></li>
                <li><StyledMenuItem href="/Kontakte" isActive={router.pathname === '/Kontakte'}>Kontakte</StyledMenuItem></li>
                <li> <StyledMenuItem href="/Notfall" isActive={router.pathname === '/Notfall'}>Notfall</StyledMenuItem></li>
                <li><StyledMenuItem href="/Impressum" isActive={router.pathname === '/Impressum'}>Impressum</StyledMenuItem></li>
            </StyledMenu>
            </>
        }      
    </div>
  );
}
