import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { modules } from "@/db/modulesData.js";

const StyledGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.6rem;
    list-style-type: none;
    padding: 0;
    margin-top: 5rem;
    margin-bottom: 4rem;
`
const CardList = styled.li`
    height: 150px;
    width: 150px;
    background-color: #546391;
    border: 1px solid #EBE1CA;
    border-radius: 2rem;
    box-shadow: 3px 3px 12px -1px rgba(0, 0, 0, 0.6);
    color: #EBE1CA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
:hover{
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
}
`
const StyledLink = styled(Link)`
    text-decoration: none;
`
export default function StyledCardList() {
  const router = useRouter();
    return (
      <StyledGrid>
        {modules.map((module) => (
          <StyledLink href={"/modules/" + module.slug} key={module.id}>
            <CardList>{module.slug} </CardList>
          </StyledLink>
        ))}
      </StyledGrid>
    );
  }
