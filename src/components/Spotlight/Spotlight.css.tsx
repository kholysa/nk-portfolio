import styled from "styled-components";


export const SpotlightContainer = styled.div`
    margin-top: -2rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    gap: 1.5rem;
    padding: 1rem;
    transition: 0.4s;
    border-bottom: 0.5px solid black;
    background-color:hsl(33, 21.60%, 85.00%);

    a{
        width: 20%
    }
`

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    color: black;
    text-decoration: none;
`

export const StyledSpotlightImage = styled.img`
width: 100%;
`
export const StyledLogo = styled.img`
width: 50%;
`