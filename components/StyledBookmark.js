import styled from "styled-components";

const StyledBookmark = styled.button`
    z-index: 99;
    position: absolute;
    top: -10px;
    right: 10px;
    font-size: 1rem;
    color: white;
    background-color: #334;
    border-radius: 3px 3px 50% 50%;
    border: none;
    width: 1.7rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 3px 5px 5px -2px rgba(0, 0, 0, 0.6);
    :hover{
    cursor: pointer;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
}
    `

export default function bookmark(){
    return(
        <StyledBookmark>☆
        </StyledBookmark>
   )
}