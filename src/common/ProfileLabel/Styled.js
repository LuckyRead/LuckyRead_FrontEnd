import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ProfileLabelContainer = styled.div`
    width: 100%;  
    height: 100%;
    background-color: ${Palette.white};
    border-bottom: 1px solid ${Palette.graylight};
    padding: 1%;
    display: block;
    padding-right: 6%;
    
  }
`;
const PhotoContainer = styled.div`
    width: 100%;
    height: 100%;
    border-right: 1px solid ${Palette.graylight};
    img {
        width: 50px;
        heihgt: 50px;
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
  color: ${props => (props.username === true ? Palette.black : Palette.gray)};
`;

const ProfileMapContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${Palette.white};
  border: 2px solid ${Palette.grayoff};
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
