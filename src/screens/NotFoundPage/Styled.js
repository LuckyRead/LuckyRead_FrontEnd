import styled from "styled-components";
import { Palette } from "../../themes/colors";

const NotFoundS = styled.div`
  width: 100%;
  height: 400px;
  margin: 5%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  h1 {
    color: ${Palette.white};
    font-family: "Playfair Display";
    margin: auto;
    text-align: center;
    text-shadow: 2px 2px ${Palette.gray};
  }
  .number {
    font-size: 1000%;
  }
`;

export { NotFoundS };
