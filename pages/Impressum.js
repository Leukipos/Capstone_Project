import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import styled from "styled-components";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";

export default function About(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard><StyledCardTitle>Über die APP</StyledCardTitle>
            <article>Die Anwedung stellt die Abschlussarbeit des Neue Fische-Bootcamps Web Development dar und wurde in einer 4-Wöchigen CapStonePhase erstellt.<br/><br/>Sie wird weder komerziell noch öffentlich Nutzbar gemacht und hat somit keinerlei rechtliche Körperschaft.
            </article>
            </StyledCard>
            <StyledCard><StyledCardTitle>Kontakt</StyledCardTitle>
            <article>Alexander Zippel<br/>Wohlers Alle 66<br/>22767 Hamburg<br/><br/>Mobil: +49 (0) 152 578 42 548<br/>Mail: <a href="mailto:alex.zippel@web.de">alex.zippel@web.de</a><br/>GitHub: <a href="https://github.com/Leukipos">Leukipos</a>
            </article>
            </StyledCard>
        </StyledModules>
        <StyledFooter/>
        </main>
    )
}
