import styled from "styled-components";
import { Palette } from "../../themes/colors";
import paper from "../../resources/paper.png";

const CommunityPageContainer = styled.div`
  margin: 2% 1% 1% 1%;
  padding: 1.5%;
  .tab-content {
    margin-top: 0px;
  }
`;

const TabContainer = styled.div`
  color: #bbbbbb;
  .itemNav {
    background-color: rgba(0, 0, 0, 0.4);
    margin-right: 0.3%;
  }

  .itemNav:hover {
    background-color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  .itemNav > .active {
    background-color: rgba(0, 0, 0, 0.4) !important;
    color: #bbbbbb !important;
    font-weight: bold !important;
    border: none;
  }
  h4 {
    color: #bbbbbb;
  }

  .divNav {
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    height: 100%;
    margin-left: 0.025%;
    margin-top: 0.25%;
  }

  .nav {
    border: none;
  }
`;

const TitleContainer = styled.div`
  color: #bbbbbb;
  border-style: none;
  font-family: "Playfair Display";
  font-weight: bold;
  font-size: 4em;
  text-align: center;
`;

const TabContent = styled.div`
  width: 100%;
  height: 100%;
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
const Cs = styled.div`  
  background-color: background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  color: "#BBBBBB"
`;
const StatisticLabelContainer = styled.div`
  background-color: background-color: rgba(0, 0, 0, 0.4);
  border: 1px solid ${props => (props.bcolor ? props.bcolor : "none")};
  width: 200px;
  height: 150px;
  padding: 0.5%;
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const TextContainer = styled.div`
  color: #bbbbbb;
  text-align: center;
  width: 100%;
`;

const NumberContainer = styled.div`
  font-weight: bold;
  color: #bbbbbb;
  text-align: center;
  width: 100%;
  font-size: 350%;
`;

const TrophyS = styled.div`
  width: 100%;
  text-align: right;
  img {
    width: 150px;
    height: 300px;
  }
`;

export {
  Palette,
  CommunityPageContainer,
  TabContainer,
  TitleContainer,
  TabContent,
  StatisticLabelContainer,
  TextContainer,
  NumberContainer,
  TrophyS,
  Cs
};
