import styled from "styled-components";
import { Palette } from "../../themes/colors";

const ProfileContainer = styled.div`
  margin-top: 20px;
`;

const ProfileCardContainer = styled.div``;
const TabContainer = styled.div`
  .itemNav {
    background-color: ${Palette.white};
    border: 2px solid ${Palette.grayoff};
    border-radius: 5px;
  }

  .itemNav:hover {
    background-color: ${Palette.grayoff};
    cursor: pointer;
  }

  .active {
    background-color: ${Palette.bluestrong};
  }

  .itemNav > .active {
    background-color: ${Palette.bluestrong} !important;
    color: ${Palette.white} !important;
    font-weight: bold !important;
  }

  .divNav {
    background-color: ${Palette.white};
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

export { ProfileContainer, ProfileCardContainer, TabContainer };
