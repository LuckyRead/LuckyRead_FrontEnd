import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./navbar.css";

class SignedInLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.user
    };
  }

  render() {
    return (
      <div>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/frag">
              Leer algo <span className="sr-only">(current)</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="news">Noticias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="categoriespage">Categorias</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {this.state.user}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Perfil</DropdownItem>
              <DropdownItem divider />
              <DropdownItem
                to="/"
                className="dropdown-item"
                onClick={this.handleLogout}
                id="exitButton"
              >
                Salir
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </div>
    );
  }
}

export default SignedInLinks;
