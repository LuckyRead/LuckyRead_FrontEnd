import styled from "styled-components";
import { Palette } from "../../themes/colors";
import paper from "../../resources/paper.png";
const PageContainer = styled.div`
  text-align: center;
  align-items: top;
  background-color: ${Palette.whiteopacity};
  border-style: solid;
  border-width: 5px;
  border-color: ${Palette.whiteopacity};
  margin: auto;
  margin 10px;
  height: 100%;
  .eEEWNZ {
    border-radius: 0px;
  }
`;

const MessageFragment = styled.div`
  color: ${Palette.blue};
  border-style: none;
  margin: 10px;
  font-family: "Playfair Display";
  margin: 0 auto;
  font-size: 4em;
  color: white;
  text-align: center;
  background-color: #1c1c1c;
  // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: inherit;
  margin: auto;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex: 2;
  flex-wrap: inherit;
  text-align: center;
  align-items: top !important;
`;

const Topics = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  font-weight: bold;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
  margin-bottom: 20px;
`;

const FragmentContent = styled.div`
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
`;

const ImageContainer = styled.div`
  border-style: solid;
  border-color: #535353;
  margin-bottom: 10px;
  min-width: 350px;
  max-width: 350px;
  margin: auto;
`;

const StatisticsContainer = styled.div`
  border-style: solid;
  height: 200px;
`;

const FragmentTitle = styled.div`
  color: black;
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  font-family: "PT Sans";
`;

const FragmentText = styled.div`
  color: black;
  margin-right: 20px;
  font-family: "Playfair Display";
  text-align: justify;
  font-size: 1.4em;
  align-items: top;
  height: 100%;
`;

const FragmentButtons = styled.div`
  text-align: center;
  margin-top: 10px;
  .btn {
    background-color: #1c1c1c;
    border-radius: 0px;
    margin: 5px;
    width: 90%;
    font-size: 0.9em;
  }
`;

const CategoryTagContainer = styled.div`
  font-size: 80%;
  color: white;
  padding: 10px;

  margin: auto;
  width: 100%;
`;

const TopicsText = styled.div`
  color: black;
`;

const TopicsRow = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
`;
const RandomFragmentS = styled.div`
  background-image: url(${paper});
`;

export {
  Left,
  Right,
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons,
  CategoryTagContainer,
  Topics,
  TopicsText,
  TopicsRow,
  RandomFragmentS
};
