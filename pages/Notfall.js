import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import styled from "styled-components";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";

const StyledArticle = styled.div`
    background-color: #f55;
    border: 3px solid #334;
    padding: 10px;
    border-radius: 1rem;
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
`
export default function Emergency(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard>
                <StyledCardTitle>Du brauchst jetzt Hilfe?</StyledCardTitle>
                <article>Es geht dir gar nicht gut?<br/>Du kannst nicht mehr?</article>
                </StyledCard>
            <StyledCard>
                <StyledCardTitle>Rufe sofort diese Nummer an:</StyledCardTitle>
                <StyledArticle>0800 111 0 111</StyledArticle>
                </StyledCard>    
            <StyledCard>
                <StyledCardTitle>Zitat von Oscar Wild:</StyledCardTitle>
                <article>Am Ende wird alles gut.<br/>Wenn es nicht gut ist,<br/>ist es nicht das Ende.</article>
                </StyledCard>
            </StyledModules>
        <StyledFooter/>
        </main>
    )
}