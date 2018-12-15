import styled from "styled-components";
import { Palette } from "../../themes/colors";
import { Button } from "reactstrap";

const ProfileContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
`;

const ProfileCardContainer = styled.div`
  width: 100%;
`;

const TabContainer = styled.div`
  color: #bbbbbb;
  .itemNav {
    margin-right: 0.3%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .itemNav:hover {
    cursor: pointer;
    background-image: none;
  }

  .itemNav > .active {
    background-color: rgba(0, 0, 0, 0.4);
    font-weight: bold !important;
    border: none;
    color: #bbbbbb;
  }
  h4 {
    color: #bbbbbb;
  }
  .divNav {
    width: 100%;
    height: 100%;
    margin-left: 0.025%;
    margin-top: 0.25%;
  }

  .nav {
    border: none;
  }
`;

const ProfileCardDiv = styled.div`
  a: hover {
    cursor: pointer;
  }
  background-color: rgba(0, 0, 0, 0.4) !important;
  padding-bottom: 1%;
`;
const ProfilePhotoContainer = styled.div`
  padding-top: 10%;
  padding-bottom: 4%;
  img {
    width: 200px;
    height: 200px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    object-fit: cover;
    overflow: hidden;
  }
`;

const AllInfoContainer = styled.div`
  padding-left: 10%;
  padding-right: 10%;
  color: #bbbbbb;
`;
const InfoContainer = styled.div`
  text-align: center;

  margin-top: ${props => (props.marginTop ? props.marginTop : 0)};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : 0)};
  background-color: ${props => (props.bgcolor ? props.bgcolor : "none")} .skinny {
    font-size: 90%;
    color: ${Palette.gray};
    font-style: italic;
  }
  h5 {
    text-align: center;
    color: #bbbbbb;
  }
  .about {
    font-size: 80%;
    font-style: italic;
    padding-bottom: 5%;
    padding-left: 2%;
    padding-right: 2%;
    padding-top: 1%;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const ChangeAvatarContainer = styled.div`
  .center {
    text-align: center;
  }
  #crop-img {
    overflow: hidden;
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }

  #crop-img img {
    object-fit: cover;
    height: 200px;
    overflow: hidden;
    margin: 0 auto;
  }
`;
const TabContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 2%;
  margin-right: 2%;
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 5%;
  padding-right: 5%;
  margin: auto;
  .ChangeButton {
    margin-top: 1%;
  }
`;
const RowInfo = styled.div`
  width: 100%;
  margin-top: 2% !important;
  text-align: center;
  .FullButton {
    width: 100%;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.4);

  }
`;

const CollapseContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 2%;
  width: 100%;
  height: 100%;
  margin-top: 2%;
`;

const TitleContainer = styled.div`
  margin-bottom: 3% !important;
`;

const InformationContentS = styled.div`
  width: 100%;
  color: #bbbbbb;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 3%;
  h6 {
    text-align: center !important;
    width: 100%;
  }
`;



const TalkToUsS = styled.div`
  text-align: right;
`;

const TalkToUsTextS = styled.div`
  text-align: center;
`;

const EditButton = styled(Button)`
  align-items: center;
  border-radius: 0px;
  font-size: 10px;
  padding: 0px;
  padding-left: 5px;
  padding-right: 5px;
  background-color: #171f31;
  display: inherit;

  display: inline-block;
`;

const Topics = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;

`;

const TopicsText = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;

`;



export {
  Palette,
  ProfileContainer,
  ProfileCardContainer,
  TabContainer,
  ProfileCardDiv,
  ProfilePhotoContainer,
  InfoContainer,
  AllInfoContainer,
  ChangeAvatarContainer,
  TabContent,
  RowInfo,
  CollapseContainer,
  TitleContainer,
  InformationContentS,
  EditButton,
  TalkToUsS,
  TalkToUsTextS,
  Topics,
  TopicsText
};
