import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./navbar.css";

// import { login } from '../../actions/authActions';

const SignedOutLinks = () => {
  return (
    <div>
      <Nav className="ml-auto" navbar>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Iniciar sesion
          </DropdownToggle>
          <DropdownMenu right>Aqui va la Login Page</DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </div>
  );
};

export default SignedOutLinks;
