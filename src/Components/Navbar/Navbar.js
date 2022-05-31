import React from 'react'
import { StyledNavbar, StyledLink, StyledUl, StyledLogo } from '../Styles/Navbar.styled'

export const Logo = (process.env.PUBLIC_URL + '/logo.png')

const Navbar = () => {
    return (
        <>
            <StyledNavbar>
                <StyledLogo src={Logo}/>
                <StyledUl>
                    <StyledLink to={"/calorie-intake"}>
                        Calorie Intake
                    </StyledLink>
                    <StyledLink to={"/nutrition"}>
                        Nutrition
                    </StyledLink>
                    <StyledLink to={"/recipes"}>
                        Recipes
                    </StyledLink>
                    <StyledLink to={"/journal"}>
                        Journal
                    </StyledLink>
                    </StyledUl>
            </StyledNavbar>
        </>
    )
}

export default Navbar

