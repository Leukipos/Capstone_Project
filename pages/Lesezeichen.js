import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";


export default function Bookmark(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard>
                <StyledCardTitle>Lesezeichen</StyledCardTitle>
                <article>hier findest du deine gespeicherten Artikel</article>
            </StyledCard>
            <StyledCard>
                <StyledCardTitle>Modulname</StyledCardTitle>
                <article>Artikeltext</article>
            </StyledCard>
        </StyledModules>
        <StyledFooter/>
        </main>
    )
}