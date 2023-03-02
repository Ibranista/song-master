import styled from "@emotion/styled";
import { space, color } from "styled-system";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  height: 64px;
  padding: 0 16px;
  ${space}
  ${color}
`;

const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
`;

const NavLink = styled.li`
  margin-right: 16px;
`;

const NavBox = ({ children, ...rest }) => (
  <NavContainer {...rest}>
    <NavLogo>My Site</NavLogo>
    <NavLinks>
      <NavLink>Home</NavLink>
      <NavLink>About</NavLink>
      <NavLink>Contact</NavLink>
    </NavLinks>
    {children}
  </NavContainer>
);

export default NavBox;
