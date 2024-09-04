import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/agri.png";

// const NavbarContainer = styled.nav`
//   background-color: #333;
//   padding: 1rem;
//   position: fixed;
//   z-index: 100; /* Ensure the navbar stays visible on top of other elements */
//   width: 100%;
//   top: 0;
//   left: 0;
// `;

// const NavList = styled.ul`
//   list-style: none;
//   display: flex;
//   justify-content: space-around;
//   margin: 0;
//   padding-left: 50rem;
//   align-items: center; /* Align items vertically in the center */
// `;

// const NavItem = styled.li`
//   margin: 0 1rem;
//   display: flex;
//   align-items: center; /* Center content vertically */
// `;

// const NavLink = styled(Link)`
//   color: white;
//   text-decoration: none;
//   font-weight: bold;
//   font-size: 1rem; /* Adjust this size to match your desired text size */

//   &:hover {
//     color: #ddd;
//   }
// `;

const StyledNavbar: React.FC = () => {
  return (
    <>
      <div>
        <img className="Logo" src={logo} alt="Logo" />
        {/* <NavList>
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
            <NavLink to="/profile">Contract</NavLink>
          </NavItem>
        </NavList> */}
      </div>
    </>
  );
};

export default styled(StyledNavbar)`
  .Logo {
    width: 150px;
    cursor: pointer;
    transition: color 0.3s ease-in-out;
    height: 150px;
    top: -50px;
    &:hover {
      color: #ddd;
    }
    position: absolute;
  }
`;
