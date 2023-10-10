import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import styled from "styled-components";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";

export default function About(){
    return(
        <main>
            <StyledHeader/>
            <StyledModules>
                <StyledCard>
                    <StyledCardTitle>Hausarzt</StyledCardTitle>
                    <article>Grundsätzlichg sollte dein Hausarzt deine erste Anlaufstelle sein um Hilfe zu bekommen und weitere Schritte zu besprechen.<br/><br/>Alternativ kannst du auch den Patientenservice anrufen und dich beraten und vermittel lasen.<br/><br/>Telefon:<strong><br/>116 117</strong></article>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Bei Suizidgedanken</StyledCardTitle>
                    <article>Du bist nicht allein und es gibt Menschen die dir helfen wollen.<br/><br/>Telefon-Seelsorge:<strong><br/>0800 11 10 111</strong><br/><br/>Notruf:<strong><br/>112</strong></article>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Bei Depressionen</StyledCardTitle>
                    <article>Grundsätzlich ist Ihr Hausarzt/Ihre Hausärztin der erste Ansprechpartner für die Diagnostik und Behandlung von Depression.<br/><br/>Beratung gibts hier:<br/><strong>0800 33 44 533</strong></article>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Erste Hilfe bei Trauer</StyledCardTitle>
                    <article>Die Berater und Beraterinnen sind an 365 Tagen im Jahr und rund um die Uhr für dich da.<br/><br/>Telefon:<br/><strong>0800 111 0 111<br/><br/>0800 111 0 222</strong></article>
                </StyledCard>    
                <StyledCard>
                    <StyledCardTitle>Gewalt gegen Frauen</StyledCardTitle>
                    <article>Nichts rechtfertig Gewalt! Nichts! Ohne Ausnahme! Schuldgefühle sind falsch und Teil der Folter!<br/><br/>Hilfetelefon:<br/><strong>08000 116 016</strong></article>
                </StyledCard>
                <StyledCard>
                    <StyledCardTitle>Erste Hilfe bei Essstörungen</StyledCardTitle>
                    <article>Essstörungen sind ernsthafte Erkrankungen, die unbedingt behandelt werden müssen<br/><br/>Kontakt BZgA:<br/><strong>0221 89 20 31</strong></article>
                </StyledCard>
            </StyledModules>
            <StyledFooter/>
        </main>
    )
}
