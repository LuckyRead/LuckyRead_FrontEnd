import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ProfileLabelContainer = styled.div`
    width: 100%;  
    height: 100%;
    background-color: ${Palette.white};
    border-bottom: 1px solid ${Palette.graylight};
    padding: 1%;
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
export { Palette, ProfileLabelContainer, PhotoContainer, StringContainer };
