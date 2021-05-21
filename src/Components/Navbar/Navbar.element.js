import styled from "styled-components";
import { Container } from "../createGlobalStyles";
import { Link } from "react-router-dom";
import { FaMagento } from "react-icons/fa";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  color: #eee;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #eee;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(FaMagento)`
  margin-right: 0.2rem;
`;

export const MobileIcon = styled.div`
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease;
  @media screen and (max-width: 960px) {
    opacity: 1;
    visibility: visible;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(-100%, -30%);
    cursor: pointer;
    /* border: 2px solid blue; */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.6s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  font-size: 0.8rem;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 2px solid transparent;
  transition: border 0.3s ease;
  transform-origin: right;
  margin-top: 0.6rem;

  &:not(:last-child) {
    margin-right: 0.3rem;
  }
  &:hover {
    transform: scale(1);
    transform-origin: left;
    &:not(:last-child) {
      border-bottom: 1px solid #4b59f7;
    }
  }

  @media screen and (max-width: 960px) {
    &:first-child {
      border-top: 1px solid #353535;
    }
    font-size: 0.87rem;
    width: 100%;
    border-bottom: 1px solid #353535;
    &:hover {
      border-bottom: 1px solid #353535;
    }
  }
`;

export const NavLink = styled(Link)`
  color: #eee;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.div`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
