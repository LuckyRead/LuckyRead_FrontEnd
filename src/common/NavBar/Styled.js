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
  width: 100% !important;
  height: 100%;
  a: hover {
    border: none;
  }
  .navbar {
    height: 45px;
    margin-bottom: 10px;
  }
`;
const LuckyReadHomeContainer = styled.div`
  a: hover {
    text-shadow: 4px 4px 7px black !important;
    transform: translate(0, -2px);
  }
`;

export { ImageContainer, NavbarContainer, LuckyReadHomeContainer };
