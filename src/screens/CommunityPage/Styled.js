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

export { Palette, CommunityPageContainer, TabContainer };
