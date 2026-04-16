import styled from "styled-components";

export const SpotlightContainer = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  gap: 1.5rem;
  padding: 1rem;
  transition: 0.4s;
  background-color: hsl(0, 0%, 100%);

  a {
    width: 20%;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: black;
  text-decoration: none;
`;

export const StyledSpotlightImage = styled.img`
  width: 100%;
`;
export const StyledLogo = styled.img`
  width: 50%;
`;
