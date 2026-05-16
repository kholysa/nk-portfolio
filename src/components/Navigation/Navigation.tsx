import { NavLink as RouterNavLink } from "react-router-dom";
import { Nav, NavLink } from "./Navigation.css.tsx";

export const Navigation = () => {
  return (
    <Nav>
      <NavLink as={RouterNavLink} to="/" end>
        Home
      </NavLink>
      <NavLink as={RouterNavLink} to="/collection">
        Collection
      </NavLink>
    </Nav>
  );
};
