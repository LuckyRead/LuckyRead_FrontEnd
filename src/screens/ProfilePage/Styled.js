import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ProfileCardContainer = styled.div`
  width: 100%;
`;

const TabContainer = styled.div`
  .itemNav {
    background-color: ${Palette.white};
    border: 1px solid ${Palette.grayoff};
    border-radius: 5px;
    margin-right: 0.3%;
  }

  .itemNav:hover {
    background-color: ${Palette.grayoff};
    cursor: pointer;
  }

  .itemNav > .active {
    background-color: ${Palette.bluestrong} !important;
    color: ${Palette.white} !important;
    font-weight: bold !important;
  }

  .divNav {
    background-color: ${Palette.white};
    width: 100%;
    height: 100%;
    margin-left: 0.025%;
    margin-top: 0.25%;
    border: 2px solid ${Palette.grayoff};
    border-radius: 10px;
  }

  .nav {
    border: none;
  }
`;

const ProfileCardDiv = styled.div`
  background-color: ${Palette.white};
  border-radius: 5px;
  border: 2px solid ${Palette.grayoff};
`;
const ProfilePhotoContainer = styled.div`
  margin-top: 10%;
  margin-bottom: 4%;
  img {
    width: 200px;
    heihgt: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

const AllInfoContainer = styled.div`
  padding-left: 5%;
  padding-right: 5%;
`;
const InfoContainer = styled.div`
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
  border-top: ${props => (props.border ? "1px solid" : "none")};
  border-color :  ${props => (props.border ? Palette.grayoff : "none")}
  margin-top: ${props => (props.margin ? props.margin : 0)};  
  .skinny {
    font-size: 90%;
    color: ${Palette.gray};
    font-style: italic;
  }
  h5 {
    text-align: center;
  }
  .about{
    font-size: 80%;
    font-style: italic;
  }
  
`;

export {
  Palette,
  ProfileContainer,
  ProfileCardContainer,
  TabContainer,
  ProfileCardDiv,
  ProfilePhotoContainer,
  InfoContainer,
  AllInfoContainer
};
