import styled from "styled-components";
import { Palette } from "../../themes/colors";

const MakeCommentContainer = styled.div`
  background-color: ${Palette.blackNavbar};
  padding: 1%;
  padding-left: 2% !important;
  margin: 1%;
  border-radius: 10px;
  h6 {
    font-size: 90%;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 20px;
  margin-bottom: 1%;
`;

export { Palette, MakeCommentContainer, TitleContainer };
