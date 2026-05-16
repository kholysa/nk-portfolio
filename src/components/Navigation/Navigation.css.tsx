import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  transition: gap 0.4s;

  .after-scroll & {
    gap: 1.25rem;
  }

  @media (max-width: 900px) {
    gap: 1.25rem;
  }
`;

export const NavLink = styled(Link)`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s, font-size 0.4s;
  font-size: 0.85rem;

  .after-scroll & {
    font-size: 0.7rem;
  }

  &:hover,
  &.active {
    border-bottom-color: currentColor;
  }
`;
