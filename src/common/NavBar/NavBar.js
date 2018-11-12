import React from "react";
import {
  NavLink,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav
} from "reactstrap";
import paperplane from "../../resources/paper_plane.png";
import SignedOutLinks from "./SignedOutLinks";
import { SignedInLinks } from "./SignedInLinks";
import "./navbar.css";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const token = localStorage.getItem("jwtToken");
    const links = token == null ? <SignedOutLinks /> : <SignedInLinks />;
    return (
      <div>
        <Navbar color="dark" dark expand="md" id="navbar">
          <NavbarBrand id="paperplane">
            <img src={paperplane} alt="paperplane" />
          </NavbarBrand>

          {token == null ? (
            <NavbarBrand id="paperplane" href="/">
              LuckyRead
            </NavbarBrand>
          ) : (
            <a className="navbar-brand" id="brand">
              LuckyRead
            </a>
          )}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
