import styled from "styled-components";
import { Palette } from "../../themes/colors";

const CommunityPageContainer = styled.div`
  border-radius: 10px;
  background-color: ${Palette.whitetransparency};
  margin: 2% 1% 1% 1%;
  padding: 1.5%;
`;

const TabContainer = styled.div`
  .itemNav {
    background-color: ${Palette.whitetransparency};
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
    background-color: ${Palette.whitetransparency};
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

const TitleContainer = styled.div`
  color: ${Palette.blue};
  border-style: none;
  font-family: "Dancing Script";
  font-weight: bold;
  font-size: 4em;
  color: #105f78;
  text-align: center;
  text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
`;

const TabContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${Palette.whitetransparency};
  border-radius: 5px;
  border: 1px solid ${Palette.grayoff};
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

const StatisticLabelContainer = styled.div`
  background-color: ${Palette.bluelabel};
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 0.5%;
  border: 5px solid ${Palette.bluelabelborder};
  display: inline-block;
  margin: 1% 1% 1% 1%;
`;
const TextContainer = styled.div`
  color: white;
  text-align: center;
  width: 100%;
`;

const NumberContainer = styled.div`
  font-weight: bold;
  color: white;
  text-align: center;
  width: 100%;
  font-size: 350%;
`;

export {
  Palette,
  CommunityPageContainer,
  TabContainer,
  TitleContainer,
  TabContent,
  StatisticLabelContainer,
  TextContainer,
  NumberContainer
};
