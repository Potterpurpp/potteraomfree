import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  background-color: #333;
  padding: 1rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #ddd;
  }
`;

const StyledNavbar: React.FC = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <NavLink to="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/fundraising">Fundraising</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/profile">Profile</NavLink>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default StyledNavbar;
