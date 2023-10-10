import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import styled from "styled-components";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";

const StyledArticle = styled.div`
    background-color: #f55;
    border: 5px solid #fff;
    padding: 15px;
    border-radius: 1rem;
    color: #fff;
    font-size: 1.8rem;
    font-weight: 800;
    text-align: center;
`
export default function Emergency(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard>
                <StyledCardTitle>Du brauchst jetzt Hilfe?</StyledCardTitle>
                <article>Es geht dir gar nicht gut und du kannst nicht mehr?
                        <br/><br/>Damit bist du nicht allein!
                        <br/><br/>Tatsächlich geht es vielen anderen auch so.
                        <br/><br/>Manchmal braucht man aber jemanden der einen zur Seite steht..
                        <br/><br/>..lass dir helfen...</article>
                </StyledCard>
            <StyledCard>
                <StyledArticle>0800 111 0 111</StyledArticle>
                </StyledCard>    
            <StyledCard>
                <StyledCardTitle>Zitat von Oscar Wild:</StyledCardTitle>
                <article>Am Ende wird alles gut. Wenn es nicht gut ist, ist es nicht das Ende.</article>
                </StyledCard>
            </StyledModules>
        <StyledFooter/>
        </main>
    )
}