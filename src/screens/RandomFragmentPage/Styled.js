import styled from "styled-components";
import { Palette } from "../../themes/colors";

const PageContainer = styled.div`
  text-align: center;
  background-color: ${Palette.whiteopacity};
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  margin: auto;
  margin-top: 10px;

  height: 100%;
`;

const MessageFragment = styled.div`
  font-size: 2.5em;
  color: ${Palette.blue};
  border-style: none;
  margin: 10px;
`;

const FragmentContent = styled.div`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  margin: auto;
  min-height: 400px;
  margin-bottom: 40px;
`;

const ImageContainer = styled.div`
  border-style: solid;
  height: 200px;
  margin-bottom: 10px;
`;

const StatisticsContainer = styled.div`
  border-style: solid;
  height: 200px;
`;

const FragmentTitle = styled.div`
  color: ${Palette.blue};
  font-size: 1em;
  font-weight: bold;
`;

const FragmentText = styled.div`
  color: black;
  margin: 20px;
`;

export {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer
};
