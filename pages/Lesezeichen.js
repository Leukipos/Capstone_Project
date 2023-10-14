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
                <StyledCardTitle>Modulname</StyledCardTitle>
                <article>gespeicherter Artikel</article>
            </StyledCard>
        </StyledModules>
        <StyledFooter/>
        </main>
    )
}