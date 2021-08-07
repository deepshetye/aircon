import React from "react";
import { FaBars } from "react-icons/fa";
import logo from "../../images/AirconLogoInBlack.svg";
import {
  Nav,
  NavLogo,
  NavbarContainer,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./navbarElements";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <img width="170px" src={logo} />
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/products">Products</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/review">Review</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/quotation">Get Quotation</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
