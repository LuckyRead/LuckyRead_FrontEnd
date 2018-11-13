import styled from "styled-components";
import { Palette } from "../../themes/colors";

const LandingPageContainer = styled.div`
  width: 100%;
  height: 100%;
  #Init {
    background: none;
    background-color: ${Palette.blackopacity}};
    align-self: center;
    display: table;
    margin: 0 auto;
    margin-top: 1%;
    border-radius: 5px;
    border-style: none;
    height: 500px;
    align-content: center;
  }
  #InitPanel {
    text-align: center;
    margin: 0 auto;
  }
  #Init-title {
    font-family: "Dancing Script";
    margin: 0 auto;
    font-weight: bold;
    font-size: 5em;
    color: ${Palette.blueTitleLanding};
    text-align: center;
    text-shadow: -5px 0 white, 0 5px white, 5px 0 white, 0 -5px white;
  }
  .Init-subtitle {
    font-family: "Open Sans";
    font-size: 2em;
    color: ${Palette.white};
    text-align: center;
    height: 100px;
  }
  #Init-button {
    margin-top: 2%;
    border-radius: 30px;
    font-size: 20px;
    border: 3px solid ${Palette.bluestrong};
    width: 12%;
  }

  #readyText {
    color: ${Palette.white};
    font-family: "Dancing Script";
    padding-top: 4%;
    padding-bottom: 2%;
    padding-left: 1%;
    padding-right: 1%;
  }
`;

export { Palette, LandingPageContainer };
