import styled from "styled-components";

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
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
`
// next Step is fetch the CardList from the arryay

export default function StyledCardList(){
    return(
        <StyledGrid>
            <CardList>Modul Eins</CardList>
            <CardList>Modul Zwei</CardList>
            <CardList>Modul Drei</CardList>
            <CardList>Modul Vier</CardList>
            <CardList>Modul Fünf</CardList>
            <CardList>Modul Sechs</CardList>
            <CardList>Modul Sieben</CardList>
            <CardList>Modul Acht</CardList>
            <CardList>Modul Neun</CardList>
        </StyledGrid>
    )
}