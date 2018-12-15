import React from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav } from "reactstrap";
import paperplane from "../../resources/paper_plane.png";
import SignedOutLinks from "./SignedOutLinks";
import { SignedInLinks } from "./SignedInLinks";
import {
  ImageContainer,
  NavbarContainer,
  LuckyReadHomeContainer
} from "./Styled";
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
      <NavbarContainer>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand>
            <ImageContainer>
              <img src={paperplane} alt="paperplane" />
            </ImageContainer>
          </NavbarBrand>

          {token == null ? (
            <LuckyReadHomeContainer>
              <NavbarBrand href="/">LuckyRead</NavbarBrand>
            </LuckyReadHomeContainer>
          ) : (
            <LuckyReadHomeContainer>
              <a className="navbar-brand" href="/RandomFragmentPage">
                LuckyRead
              </a>
            </LuckyReadHomeContainer>
          )}
          <NavbarToggler onClick={this.toggle} />

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {links}
            </Nav>
          </Collapse>
        </Navbar>
      </NavbarContainer>
    );
  }
}
