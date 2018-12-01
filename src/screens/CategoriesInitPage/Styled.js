import styled from "styled-components";
import { Palette } from "../../themes/colors";

const TopicCard = styled.div`
  background-image: url(${props => props.topicimage});
  background-repeat: no-repeat;
  background-size: cover;
  border-style: solid;
  border-width: 5px;
  border-color: white;

  margin: auto;
  width: 220px;
  height: 220px;
  text-align: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  display: grid;
`;

const TopicsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 90%;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const TopicCardSelect = styled.div`
  display: grid;
  cursor: pointer;
  background: rgba(0, 0, 0, ${props => (props.select ? 0.6 : 0)});
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  color: white;
  text-shadow: ${props => (props.select ? "2px 2px 2px #000" : "0px")};
`;

const NextButton = styled.div`
  margin: auto;
`;

const Title = styled.div`
  margin: auto;
  font-size: 3em;
  font-family: "Dancing Script";
  font-weight: bold;
`;
export { TopicCard, TopicsContainer, TopicCardSelect, NextButton, Title };
