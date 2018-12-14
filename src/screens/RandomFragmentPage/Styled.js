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
  padding-bottom: 20px;
  height: 100%;
`;

const MessageFragment = styled.div`
  color: ${Palette.blue};
  border-style: none;
  margin: 10px;
  font-family: "Dancing Script";
  margin: 0 auto;
  font-weight: bold;
  font-size: 4em;
  color: black;
  text-align: center;
  text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
`;

const Topics = styled.div`
  width: 95%;
  height: 95%;
  text-align: justify;
  margin: auto;
  margin-bottom: 10px;
`;

const FragmentContent = styled.div`
  width: 95%;
  height: 95%;
  background-color: white;
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled.div`
  border-style: solid;
  border-color: gray;
  margin-bottom: 10px;
`;

const StatisticsContainer = styled.div`
  border-style: solid;
  height: 200px;
`;

const FragmentTitle = styled.div`
  color: ${Palette.blue};
  font-size: 3em;
  font-weight: bold;
  text-align: center;
`;

const FragmentText = styled.div`
  color: black;
  margin: 20px;
  color: #383838;
  font-family: "Playfair Display";
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
  margin-left: 2px;
  margin-right: 2px;
  background-color: #757575;
  display: inline-block;
  font-size: 80%;
  color: white;
  padding: 10px;
  text-align: center;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  text-align: center;
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
  TagsContainer,
  Topics
};
