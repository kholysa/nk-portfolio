import styled from "styled-components";


export const MainTitle = styled.div`
    &.after-scroll {
        font-size: 0.75rem;
    }
    &.before-scroll {
        font-size: 1.5rem;
    }
    transition: 0.4s;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
`

export const SecondaryTitle = styled.div`
    font-family: Lato, sans-serif;
    font-weight: 550;
    letter-spacing: 0.7rem;
    text-transform: uppercase;
    transition: 0.4s;
    &.before-scroll {
        font-size: 2rem;
    }
    &.after-scroll {
        font-size: 1rem;
    }
`

export const Subtitle = styled.div`
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    transition: 0.4s;
    &.before-scroll {
        font-size: 1.25rem;
    }
    &.after-scroll {
        font-size: 0.75rem;
    }
`

export const TitleContainer = styled.div`
    position: sticky;
    top: 0;
    box-shadow: #a8a2a2 1rem 1rem 2rem;
    width: -webkit-fill-available;
    background: #ebe6e0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;
    transition: 0.4s;
    @media (max-width: 800px) {
        gap: 0.5rem;
    }
    &.after-scroll {
        transition: 0.4s;
        font-size: 0.5rem;
        gap: 0.5rem;
    }
`