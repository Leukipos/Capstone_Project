import styled from "styled-components";
import Link from "next/link"

const StyledLink = styled(Link)`
z-index: 200;
position: fixed;
top: 1.3rem;
left: calc(50% - 170px);
text-decoration: none;
color: #DDC;

`

export default function StyledBackButton(){
    return(
        <StyledLink href="/main">⬅︎</StyledLink>
        )
}