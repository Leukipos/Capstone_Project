import styled from "styled-components";

export const StyledCard = styled.li`
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

:hover{
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}
:active{
    transform: scale(1);
    transition: all 0.2s ease-in-out;
}
`