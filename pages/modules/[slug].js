import { StyledCard , StyledModules , StyledCardTitle } from '@/components/StyledCard'
import { useRouter } from "next/router";
import { modules } from "@/db/modulesData.js";
import StyledFooter from '@/components/StyledFooter'
import StyledHead from '@/components/StyledHead'
import StyledBackButton from "@/components/StyledBackButton";

export default function Module() {
    const router = useRouter();
    const { slug } = router.query;
    if (!slug) {
        return <h1>...is loading</h1>;
      }
    const selectedModule = modules.find((module) => module.slug === slug);
    console.log(selectedModule.articles)
    return (
        <main>
            <StyledBackButton />
            <StyledHead />
            <StyledModules>
                {selectedModule.articles?.map((article) => (
                    <StyledCard key={article.id}>
                        <StyledCardTitle>{article.title}</StyledCardTitle>
                        <article>{article.text}</article>
                    </StyledCard>
                ))}
            </StyledModules>
            <StyledFooter />
        </main>
    );
}