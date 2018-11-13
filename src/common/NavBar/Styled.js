import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ImageContainer = styled.div`
  img {
    width: 50px;
    height: 40px;
    opacity: 0.6;
  }
`;
const NavbarContainer = styled.div`
  nav {
    background-color: ${Palette.blackNavbar} !important;
  }
  width: 100% !important;
  height: 100%;
  a: hover {
    border: none;
  }
  .navbar {
    height: 45px;
    margin-bottom: 10px;
  }
  .navbar-brand {
    color: ${Palette.white} !important;
  }
`;
const LuckyReadHomeContainer = styled.div`
  a: hover {
    text-shadow: 4px 4px 7px ${Palette.black} !important;
    transform: translate(0, -2px);
  }
  font-family: "Dancing Script";
`;

const SignedOutLinksContainer = styled.div`
  a {
    font-size: 16px !important;
    color: ${Palette.whiteopacity} !important;
  }

  a: hover {
    color: ${Palette.white} !important;
  }

  #forgotPassword {
    color: ${Palette.blueLinkopacity} !important;
    border: ${Palette.white} !important;
  }
  #forgotPassword: hover {
    color: ${Palette.blueTitleLanding} !important;
  }
`;
const SignedInLinksContainer = styled.div`
  a {
    font-size: 16px !important;
  }
  button: hover {
    cursor: pointer;
    background-color: ${Palette.blackNavbar} !important;
  }
  div {
    background-color: ${Palette.blackNavbar} !important;
  }
  a {
    color: ${Palette.whiteopacity} !important;
  }
  a: hover {
    color: ${Palette.white} !important;
  }
  #profile: hover {
    background-color: ${Palette.blackNavbar} !important;
  }
  h6 {
    color: ${Palette.whiteopacity} !important;
  }
  button: hover > h6 {
    color: ${Palette.white} !important;
  }
`;

export {
  ImageContainer,
  NavbarContainer,
  LuckyReadHomeContainer,
  SignedOutLinksContainer,
  SignedInLinksContainer
};
