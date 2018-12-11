import React, { Component } from "react";
import { connect } from "react-redux";
import { userActions } from "../../_actions";
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { SignedInLinksContainer } from "./Styled";
class SignedInLinks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.user
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout = event => {
    event.preventDefault();
    const { dispatch } = this.props;
    console.log("dispatch logout");
    dispatch(userActions.logout());
  };

  render() {
    return (
      <SignedInLinksContainer>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/RandomFragmentPage">
              Leer algo <span className="sr-only">(current)</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Community">CommunityPage</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/news">Noticias</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/categoriespage">Categorias</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {this.state.user}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem href="/ProfilePage" id="profile">
                Perfil
              </DropdownItem>

              <DropdownItem divider />
              <DropdownItem
                className="dropdown-item"
                onClick={this.handleLogout}
                id="exitButton"
              >
                <h6>Salir</h6>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </SignedInLinksContainer>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  const { validating_email } = state.email_exist;
  const { validating_username } = state.username_exist;

  return {
    registering,
    validating_email,
    validating_username
  };
}

const connectedSignedInLinks = connect(mapStateToProps)(SignedInLinks);
export { connectedSignedInLinks as SignedInLinks };
