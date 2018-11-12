import styled from "styled-components";
import { Palette } from "../../themes/colors";

const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;
  div {
    margin: auto;
    width: 200px;
    height: 200px;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;

export { Palette, LoadingContainer };
