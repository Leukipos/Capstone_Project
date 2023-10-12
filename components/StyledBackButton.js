import styled from "styled-components";
import Link from "next/link"
import Image from "next/image";

const StyledLink = styled(Link)`
z-index: 200;
position: fixed;
top: 1rem;
left: calc(50% - 165px);
:hover{
    cursor: pointer;
}
`
export default function StyledBackButton(){
    return(
        <StyledLink href="/Module">
            <Image  src="/images/ButtonBack.gif"
                    width={35}
                    height={35}
                    alt='⬅︎'
                    role='back button'
                />
        </StyledLink>
        )
}