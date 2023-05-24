import styled from 'styled-components';
import Marquee from '@/components/Marquee'

const StyledFooterBar = styled.footer`
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 2.5rem;
    background-color: #334;
    font-weight: 100;
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