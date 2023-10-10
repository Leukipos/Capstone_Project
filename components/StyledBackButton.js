import styled from "styled-components";
import Link from "next/link"
import Image from "next/image";

const StyledLink = styled(Link)`
z-index: 200;
position: fixed;
top: 1rem;
left: calc(50% - 170px);
text-decoration: none;
color: #DDC;
font-size: 1.5rem;
:hover{
    cursor: pointer;
}
`
export default function StyledBackButton(){
    return(
        <StyledLink href="/Module">
            <Image  src={require('/public/images/ButtonBack.gif')}
                                    width={30}
                                    height={30}
                                    alt='⬅︎'
                            />
        </StyledLink>
        )
}