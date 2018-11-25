import styled from "styled-components";
import { Palette } from "../../themes/colors";

const CommentContainer = styled.div`
  background-color: white;
  padding: 1%;
  margin: 1%;
  border-radius: 10px;
  border: 2px solid ${Palette.grayoff};
`;
const CommentProfile = styled.div`
  border-right: 1px solid ${Palette.grayoff};
`;

export { Palette, CommentContainer, CommentProfile };
