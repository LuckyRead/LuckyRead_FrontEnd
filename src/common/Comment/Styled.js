import styled from "styled-components";
import { Palette } from "../../themes/colors";

const CommentContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  color: #bbbbbb;
  padding: 1%;
  display: block;
  width: ${props => (props.w ? props.w : "100%")};
  margin: 1%;
  p {
    text-align: justify;
    padding-right: 1%;
  }
  .responses {
    justify-content: end;
  }
`;

const CommentContainerS = styled.div`
  margin: auto;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.4);
  color: #bbbbbb;
  padding: 2%;
  display: block;
  width: ${props => (props.w ? props.w : "100%")};
  margin: 1%;
  h4 {
    color: #bbbbbb;
    font-size: 150%;
    margin-left: 2%;
  }
  .responses {
    justify-content: end;
  }
  .position-relative.form-group {
    width: 100%;
    padding: 1.5%;
  }
`;
const ResponseContainerS = styled.div`
  margin: auto;
  width: 50% !important;
  margin-left: 50% !important;
  background-color: rgba(0, 0, 0, 0.4);
  color: #bbbbbb;
  padding: 2%;
  display: block;
  width: ${props => (props.w ? props.w : "100%")};
  margin: 1%;
  h4 {
    color: #bbbbbb;
    font-size: 150%;
    margin-left: 2%;
  }
  .responses {
    justify-content: end;
  }
  .position-relative.form-group {
    width: 100%;
    padding: 1.5%;
  }
`;

const ProfileInfoContainer = styled.div`
  margin: auto;
  width: 100%;
  text-align: center;
  border-right: 1px solid ${Palette.grayoff};
  color: #bbbbbb;
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

const ReactionButton = styled.div`
  margin-right: 1%;
`;

const MapContainer = styled.div`
  margin: 1%;
  padding: 2%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.4);
  h1 {
    color: ${Palette.white};
  }
`;
const MapResponseContainer = styled.div`
  width: 100%;
  margin: auto;
  text-align: right;
`;
const ResponsesS = styled.div`
  .responses {
    justify-content: end;
  }
`;
const Right = styled.div`
  text-align: left;
  margin: 10px;
  padding: 10px;
`;

const Response = styled.div`
  text-align: right;
  margin: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  width: 80%;
  display: inline-block;
  justify-content: flex-end;
  flex-wrap: nowrap;
`;

const Left = styled.div`
  text-align: center;
  width: 100%;
`;

export {
  Palette,
  CommentContainer,
  ProfileInfoContainer,
  ReactionButton,
  MapContainer,
  MapResponseContainer,
  Right,
  Response,
  Left,
  ResponsesS,
  CommentContainerS,
  ResponseContainerS
};
