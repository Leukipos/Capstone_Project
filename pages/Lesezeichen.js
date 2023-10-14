import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";
import StyledBookmark from "@/components/StyledBookmark";


export default function Bookmark(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard>
                <StyledBookmark/>
                <StyledCardTitle>Lesezeichen</StyledCardTitle>
                <article>hier findest du deine gespeicherten Artikel</article>
            </StyledCard>
            <StyledCard>
                <StyledBookmark/>
                <StyledCardTitle>Modulname</StyledCardTitle>
                <article>Artikeltext</article>
            </StyledCard>
        </StyledModules>
        <StyledFooter/>
        </main>
    )
}