import styled from "styled-components";
import { Palette } from "../../themes/colors";

const CommentContainer = styled.div`
  background-color: white;
  padding: 1%;
  margin: 1%;
  border-radius: 10px;
  border: 2px solid ${Palette.grayoff};
`;

const ProfileInfoContainer = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  border-right: 1px solid ${Palette.grayoff};
  padding: 2%;
  img {
    width: 100px;
    height: 100px;
    margin: auto;
  }
  .name {
    font-size: 100%;
    margin-top: 2%;
  }
  .nickname {
    font-size: 70%;
    font-style: italic;
    color: ${Palette.gray};
  }
`;

export { Palette, CommentContainer, ProfileInfoContainer };
