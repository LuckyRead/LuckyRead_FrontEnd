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
  width: 95%;
  height: 95%;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  margin: auto;
  padding: 40px;
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

const FragmentButtons = styled.div`
  text-align: center;
  .btn {
    margin: 5px;
    width: 100%;
    font-size: 0.9em;
  }
`;

const CategoryTagContainer = styled.div`
  margin-left: 0.2%;
  margin-right: 0.2%;
  padding-left: 1%;
  padding-right: 1%;
  background-color: ${Palette.graylight};
  display: inline-block;
  border-radius: 5px;
  font-size: 80%;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons,
  CategoryTagContainer,
  TagsContainer
};
