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
  padding-bottom: 10px;
  height: 100%;
`;

const MessageFragment = styled.div`
  color: ${Palette.blue};
  border-style: none;
  margin: 10px;
  font-family: 'Dancing Script';
  margin: 0 auto;
  font-weight: bold;
  font-size: 4em;
  color: #105F78;
  text-align: center;
  text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
`;

const FragmentContent = styled.div`
  width: 95%;
  height: 95%;
  text-align: justify;
  background-color: white;
  border-radius: 10px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  margin: auto;
  margin-bottom: 10px;
  padding: 40px;
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
