import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import styled from "styled-components";

const StyledDiv = styled.div`
    margin-top: 10rem;
` 

export default function Emergency(){
    return(
        <main>
        <StyledHeader/>
            <StyledDiv>S.O.S</StyledDiv>
        <StyledFooter/>
        </main>
    )
}