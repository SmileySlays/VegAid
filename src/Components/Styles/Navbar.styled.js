import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledNavbar = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

export const StyledLink = styled(Link)`
    color: white;
    margin: auto;
    padding-right: 2em;
    text-decoration: underline;
    font-size: 1.5vw;
    &:hover {
        color: green;
    }
`

export const StyledLogo = styled.img`
    width: 10vw;
    border-radius: 50%;
`
