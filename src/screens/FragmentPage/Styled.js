import styled from "styled-components";
import { Palette } from "../../themes/colors";

const PageContainer = styled.div`
  text-align: center;
  align-items: top;
  z-index: -1;
  border: none !important;
  margin: auto;
  margin 10px;
  height: 100%;
  .eEEWNZ {
    border-radius: 0px;
  }
  .bg {
    height: 100%;
    width: 100%;
  }
  a: hover {
    border-bottom: none;
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
  background-color: rgba(0, 0, 0, 0.4);
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
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
  .bg {
    height: 100%;
    width: 100%;
  }
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
  a: hover {
    border-bottom: none;
  }
  background-color: rgba(23, 31, 49, 0.6);
`;

const ImageContainer = styled.div`
  border-style: solid;
  border-color: rgba(0,0,0,0.4)
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
  margin: auto;
  color: #bbbbbb;
  font-family: "Playfair Display";
  margin-right: 20px;
  text-align: justify;
  font-size: 1.4em;
  align-items: top;
  height: 100%;
  margin-bottom: 20px;
`;

const FragmentButtons = styled.div`
  text-align: center;
  margin-top: 10px;
  color: white;
  .btn {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0px;
    margin: 5px;
    border-style: none;
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

const Reaction = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  .btn {
    border-radius: 0px;
    font-size: 0.9em;
  }
`;
const ReactionS = styled.div`
  width: 100%;
  padding-top: 0px;
  justify-content: center;
  display: inherit;
`;
const Reactionc = styled.div`
  display: inline-block;
  margin: 1%;
  h6 {
    color: ${props => (props.color ? props.color : "white")};
    font-size: 40%;
  }
`;

const Content = styled.div`
  margin: auto;
  margin-bottom: 10px;
  padding: 20px;
`;

const Comments = styled.div`
  margin: auto;
  width: 100%;
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
  Content,
  Reaction,
  Comments,
  ReactionS,
  Reactionc
};
