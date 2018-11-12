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
import paperplane from "../../resources/paper_plane.png";
import SignedOutLinks from "./SignedOutLinks";
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
    const token = null;
    const links = token == null ? <SignedOutLinks /> : null;
    return (
      <div>
        <Navbar color="dark" dark expand="md" id="navbar">
          <NavbarBrand id="paperplane">
            <img src={paperplane} alt="paperplane" />
            <a id="brand">LuckyRead</a>
          </NavbarBrand>
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
