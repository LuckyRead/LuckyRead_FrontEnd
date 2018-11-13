import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ImageContainer = styled.div`
  img {
    width: 50px;
    height: 40px;
    opacity: 0.6;
  }
  img: hover {
    boder-bottom: none !important;
  }
`;
const NavbarContainer = styled.div`
  width: 100% !important;
  height: 100%;
  .navbar {
    height: 45px;
    margin-bottom: 10px;
  }
`;

export { ImageContainer, NavbarContainer };
