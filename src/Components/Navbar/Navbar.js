import React from 'react'
import { StyledNavbar, StyledLink, StyledUl, StyledLogo } from '../Styles/Navbar.styled'

const Logo = (process.env.PUBLIC_URL + '/logo.png')

const Navbar = () => {
    return (
        <>
            <StyledNavbar>
                <StyledLogo src={Logo}/>
                <StyledUl>
                    <StyledLink to={"/calorieintake"}>
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

