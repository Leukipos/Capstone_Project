import { useRouter } from "next/router";
import styled from "styled-components";
import StyledMenuButton from "./StyledMenuButton";

const StyledHeadBar = styled.header`
    position: fixed;
    top: 0;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 4rem;
    background-color: #334;
    color: #DCC;
    font-size: 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 12px -1px rgba(0, 0, 0, 0.8);
    z-index: 100;
`
export default function StyledHead(){
    const router = useRouter();
    const lastPart = router.asPath.split("/").pop();
    return(<>
        <StyledHeadBar>
            {lastPart}
        </StyledHeadBar>
        <StyledMenuButton />
        </>
    )
}