import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";

import LoginPage from "../../screens/LoginPage/LoginPage";
import { SignedOutLinksContainer } from "./Styled";

const SignedOutLinks = () => {
  return (
    <SignedOutLinksContainer>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="news">Noticias</NavLink>
        </NavItem>
        {localStorage.preferences == null ? null :
          <NavItem>
            <NavLink href="RegisterPage">Registrarme</NavLink>
          </NavItem>}

        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Iniciar sesion
          </DropdownToggle>
          <DropdownMenu right>
            <LoginPage />
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
    </SignedOutLinksContainer>
  );
};

export default SignedOutLinks;
