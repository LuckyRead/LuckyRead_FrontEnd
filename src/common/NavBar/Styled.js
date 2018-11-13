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
    background-color: #0009 !important;
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
    color: white !important;
  }
`;
const LuckyReadHomeContainer = styled.div`
  a: hover {
    text-shadow: 4px 4px 7px ${Palette.black} !important;
    transform: translate(0, -2px);
  }
`;

const SignedOutLinksContainer = styled.div`
  a {
    font-size: 16px !important;
  }
`;
const SignedInLinksContainer = styled.div`
  a {
    font-size: 16px !important;
  }
  button: hover {
    cursor: pointer;
  }
`;

export {
  ImageContainer,
  NavbarContainer,
  LuckyReadHomeContainer,
  SignedOutLinksContainer,
  SignedInLinksContainer
};
