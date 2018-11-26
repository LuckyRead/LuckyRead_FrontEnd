import styled from "styled-components";
import { Palette } from "../../themes/colors";


const TopicCard = styled.div`
  background-color: ${Palette.blueLinkopacity};
  border-style: solid;
  border-width: 5px;
  border-color: white;
  color: white;
  margin: auto;
  width: 200px;
  height: 200px;
  text-align: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  display: flex;
  cursor: pointer;
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  align-items: center;
  text-align: center;
`;


export {
  TopicCard,
  TopicsContainer
};
