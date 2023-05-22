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
            <StyledDiv>{"Am Ende wird alles gut. Wenn es nicht gut ist, ist es nicht das Ende"}</StyledDiv>
        <StyledFooter/>
        </main>
    )
}
