import styled from "styled-components";

const StyledMarquee = styled.p`
  font-size: 1.2rem;
  color: #DCC;
  position: absolute;
  white-space: nowrap;
  line-height: 100%;
  overflow: hidden;
  animation: anim 20s linear infinite;
  @keyframes anim {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;
export default function Marquee() {
  return (
    <StyledMarquee>
      Wenn du das Gefühl hast, dass du am Ende bist, denke daran, dass es nur
      der Anfang von etwas Neuem sein könnte.
    </StyledMarquee>
  );
}
