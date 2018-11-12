import React from "react";
import {
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
