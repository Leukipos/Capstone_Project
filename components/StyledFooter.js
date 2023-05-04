import styled from 'styled-components';
import Marquee from '@/components/Marquee'



const StyledFooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    padding: 1rem;
    margin: 0;
    width: 100%;
    height: 3rem;
    background-color: #334;
    color: #DCC;
    font-size: 0.8rem;
    font-weight: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.8);
    z-index: 100;
`


export default function StyledFooter(){
    return(
        <StyledFooterBar>
            <Marquee />
        </StyledFooterBar>
    )
}