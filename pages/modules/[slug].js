import { StyledCard , StyledModules , StyledCardTitle } from '@/components/StyledCard'
import { useRouter } from "next/router";
import { modules } from "@/db/modulesData.js";
import StyledFooter from '@/components/StyledFooter'
import StyledHead from '@/components/StyledHead'
import StyledBackButton from "@/components/StyledBackButton";

export default async function Module() {
    const router = useRouter();
    const { slug } = router.query;
    const selectedModule = await modules.find((module) => module.slug === slug);
    await console.log(selectedModule)
    return (
        <main>
            <StyledBackButton />
            <StyledHead />
            <StyledModules><h1>{selectedModule.id + ". " + selectedModule.slug}</h1>
                {selectedModule.articles.map((article) => (
                    <StyledCard key={article.number}>
                        <StyledCardTitle>{article.title}</StyledCardTitle>
                        <article>{article.text}</article>
                    </StyledCard>
                ))}
            </StyledModules>
            <StyledFooter />
        </main>
    );
}