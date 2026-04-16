import styled from "styled-components";

export const TitleContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  box-shadow: rgb(148, 148, 148) 1rem 1rem 2rem;
  width: -webkit-fill-available;
  max-width: 100%;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  transition: 0.4s;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1.25rem;
  }

  &.after-scroll {
    transition: 0.4s;
    font-size: 0.5rem;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
  }
`;

export const TitleSideLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.35rem;
  min-width: 0;

  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

export const TitleSideRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  gap: 0.35rem;
  min-width: 0;

  @media (max-width: 900px) {
    align-items: center;
    width: 100%;
  }
`;

export const TitleColumn = styled.div`
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  text-align: center;
  padding: 0 0.75rem;
  min-width: 0;

  @media (max-width: 800px) {
    gap: 0.5rem;
  }

  .after-scroll & {
    gap: 0.5rem;
  }
`;

export const TitleSideLabel = styled.span`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12rem;
  color: black;
  transition: 0.4s;
  &.before-scroll {
    font-size: 0.65rem;
  }
  &.after-scroll {
    font-size: 0.5rem;
  }
`;

export const TitlePodcastLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  gap: 0.75rem;
  flex-wrap: wrap;
  transition: gap 0.4s;

  a {
    display: flex;
    align-items: center;
    transition: max-width 0.4s;
  }

  &.before-scroll a {
    max-width: 88px;
  }

  &.after-scroll a {
    max-width: 48px;
  }

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

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
`;

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
`;

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
`;

export const TitleSpotlightImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: max-width 0.4s;
  &.before-scroll {
    max-width: 140px;
  }
  &.after-scroll {
    max-width: 72px;
  }
`;

export const TitlePodcastLogo = styled.img`
  width: 100%;
  height: auto;
  display: block;
  transition: max-width 0.4s;
  &.before-scroll {
    max-width: 72px;
  }
  &.after-scroll {
    max-width: 40px;
  }
`;
