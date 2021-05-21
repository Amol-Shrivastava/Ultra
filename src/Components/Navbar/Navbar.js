import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../createGlobalStyles";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavItemBtn,
  NavBtnLink,
} from "./Navbar.element";

const Navbar = () => {
  //button_Primary_color: #4b59f7
  //button_Sec_color: #0467fb
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={() => setClick(false)}>
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={() => setClick(!click)}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={() => setClick(!click)} click={click}>
              <NavItem>
                <NavLink to="/">Home</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/services">Services</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/products">Products</NavLink>
              </NavItem>

              <NavItem>
                <NavLink to="/about">About Us</NavLink>
              </NavItem>

              <NavItem>
                <NavItemBtn>
                  {button ? (
                    <NavBtnLink to="/sign-up">
                      <Button bg="#4b59f7">SIGN UP</Button>
                    </NavBtnLink>
                  ) : (
                    <NavBtnLink to="/sign-in">
                      <Button bg="#4b59f7">SIGN IN</Button>
                    </NavBtnLink>
                  )}
                </NavItemBtn>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
