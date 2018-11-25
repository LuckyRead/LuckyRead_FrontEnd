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
  padding: 2%;
  img {
    width: 100px;
    height: 100px;
  }
`;
const ProfileInfoContainer = styled.div`
  margin: auto;
`;

export { Palette, CommentContainer, CommentProfile, ProfileInfoContainer };
