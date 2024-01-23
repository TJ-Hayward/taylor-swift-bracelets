import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.js";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <div>Taylor Swift Bracelet Helper</div>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="AlphabetForm" activeStyle>
            Alphabet Form
          </NavLink>
          <NavLink to="AddQuotes" activeStyle>
            Add Quotes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
