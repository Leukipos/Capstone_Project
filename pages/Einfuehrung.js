import StyledHeader from "@/components/StyledHead";
import StyledFooter from "@/components/StyledFooter";
import { StyledCard, StyledModules, StyledCardTitle } from "@/components/StyledCard";

export default function About(){
    return(
        <main>
        <StyledHeader/>
        <StyledModules>
            <StyledCard><StyledCardTitle>Hinweis</StyledCardTitle>
                <article>Diese App ersetzt weder Therapeuten noch Ärtzte oder gar Freunde. Sie soll nur eine gut gemeinte Hilfestellung bieten um den Alltag besser zu bewältigen.
                </article>
            </StyledCard>
            <StyledCard><StyledCardTitle>Anleitung</StyledCardTitle>
                <article>Bei Fragen oder Problemen, schau in das entsprechende Modul und lies die Artikel aufmerksam. Du wirst feststellen, dass sich Verbindungen zu anderen Modulen ergeben. Lies so viel wie möglich, um dein Wissen zu aktivieren und Fortschritte zu machen.
                </article>
            </StyledCard>
            <StyledCard><StyledCardTitle>Diese Anwendung..</StyledCardTitle>
                <article>..zur emotionalen Grundbildung fördert die emotionale Gesundheit. Mit regelmäßiger Nutzung stärkt sie die emotionalen Fähigkeiten und hilft dabei, ein ausgeglichenes und erfülltes Leben zu führen.
                </article>
            </StyledCard>
            <StyledCard><StyledCardTitle>Emotionale Bildung..</StyledCardTitle>
                <article>..ist entscheidend für unsere Gesundheit. Sie hilft uns, Emotionen zu verstehen, zu regulieren und empathisch zu sein. Sie reduziert Stress, löst Konflikte und verbessert Beziehungen. Auch die Bewältigung psychischer Probleme wird erleichtert.
                </article>
            </StyledCard>
            <StyledCard><StyledCardTitle>Grundgedanke</StyledCardTitle>
                <article>Es gibt Momente, in denen wir uns schlecht fühlen, ohne genau zu wissen warum. Oder wir haben Schwierigkeiten, etwas zu erreichen. Oft liegt dies an unserem emotionalen Zustand. Doch der Weg zum Therapeuten ist manchmal langwierig und bietet keine unmittelbare Hilfe. Vielleicht kann es helfen, das Wissen, das in unseren Köpfen vorhanden ist, aber nicht genutzt wird, herauszunehmen und damit zu arbeiten. Daher möchte ich dir meine Unterstützung anbieten und dir helfen, das Wissen, das du bereits in dir trägst, zu erkennen und es sofort für dich selbst einzusetzen. Nimm Meine Hand..!
                </article>
            </StyledCard>       
        </StyledModules>
        <StyledFooter/>
        </main>
    )
}
