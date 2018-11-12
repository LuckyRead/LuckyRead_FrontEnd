import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import "./navbar.css";
import LoginPage from "../../screens/LoginPage/LoginPage";

const SignedOutLinks = () => {
  return (
    <div>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="news">Noticias</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Iniciar sesion
          </DropdownToggle>
          <DropdownMenu right>
            <LoginPage />
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default SignedOutLinks;
