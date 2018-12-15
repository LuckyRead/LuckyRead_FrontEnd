import styled from "styled-components";
import { Palette } from "../../themes/colors";

const CategoryContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
  padding-bottom: 0.5%;
  padding-top: 0.5%;
`;
const ButtonContainer = styled.div`
  text-align: center;
  padding-bottom: 0.5%;
  padding-top: 0.5%;
`;
const TopicCard = styled.div`
  background-image: url(${props => props.topicimage});
  background-repeat: no-repeat;
  background-size: cover;
  margin: auto;
  width: 220px;
  height: 220px;
  text-align: center;
  align-items: center;
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
  background: rgba(0, 0, 0, ${props => (props.select ? 0.8 : 0)});
  font-size: 15px;
  width: 100%;
  height: 100%;
  align-items: center;
  text-align: center;
  color: white;
  text-shadow: 2px 2px 2px #000;
`;

const NextButton = styled.div`
  margin: auto;
  button {
    margin: auto;
  }
`;
const CategorieS = styled.div`
  margin: 1%;
`;

/*const Title = styled.div`
  width: 100%;
  background-color: 
  margin: auto;
  font-size: 3em;
  font-family: "Playfair Display";
  font-weight: bold;
  color: white;
`;*/
const Title = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  color: ${Palette.blue};
  border-style: none;
  margin: 10px;
  font-family: "Playfair Display";
  margin: 0 auto;
  font-size: 4em;
  color: white;
  text-align: center;
  // text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
export {
  TopicCard,
  TopicsContainer,
  TopicCardSelect,
  NextButton,
  Title,
  CategoryContainer,
  CategorieS,
  ButtonContainer
};
