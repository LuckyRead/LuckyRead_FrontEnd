import styled from "styled-components";
import { Palette } from "../../themes/colors";

const MakeCommentContainer = styled.div`
  background-color: ${Palette.blackNavbar};
  padding: 1%;
  padding-left: 2% !important;
  margin: 1%;
  border-radius: 10px;
`;

const TitleContainer = styled.div`
  width: 100%;
  color: white;
  font-size: 20px;
`;
export { Palette, MakeCommentContainer, TitleContainer };
