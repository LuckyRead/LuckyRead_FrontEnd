import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ProfileLabelContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid ${Palette.blue};
    padding: 1%;
    display: block;
    padding-right: 6%;

  }
`;
const PhotoContainer = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid ${Palette.blue};
    img {
        width: 50px;
        heigth: 50px;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
  }
`;

const StringContainer = styled.div`
  display: block;
  padding-left: 1%;
  font-size: ${props => (props.username === true ? "100%" : "80%")};
  font-style: ${props => (props.username === true ? "normal" : "italic")};
  color: ${props => (props.username === true ? "#BBBBBB" : Palette.gray)};
`;

const ProfileMapContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid ${Palette.blue};
`;

const FollowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  button {
    width: 25px !important;
    height: 25px !important;
    text-align: right;
  }
  img {
    width: 20px;
    height: 20px;
  }
`;
export {
  Palette,
  ProfileLabelContainer,
  PhotoContainer,
  StringContainer,
  ProfileMapContainer,
  FollowContainer
};
