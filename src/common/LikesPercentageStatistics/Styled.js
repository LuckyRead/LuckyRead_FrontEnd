import styled from "styled-components";
import { Palette } from "../../themes/colors";

const PercentageContainer = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  .html2canvas-container {
    width: 3000px !important;
    height: 3000px !important;
  }
  .CircularProgressbar {
    width: 100%;
    height: 100%;
  }
  .CircularProgressbar .CircularProgressbar-path {
    stroke: #3e98c7;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .like .CircularProgressbar-path {
    stroke: #3e9749;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .like .CircularProgressbar-text {
    fill: #3e9749 !important;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }
  .dislike .CircularProgressbar-path {
    stroke: #f4431f;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .dislike .CircularProgressbar-text {
    fill: #f4431f !important;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .noreaction .CircularProgressbar-path {
    stroke: #fbb964;
    stroke-linecap: round;
    transition: stroke-dashoffset 0.5s ease 0s;
  }

  .noreaction .CircularProgressbar-text {
    fill: #fbb964 !important;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-trail {
    stroke: #d6d6d6;
  }

  .CircularProgressbar .CircularProgressbar-text {
    fill: #3e98c7;
    font-size: 20px;
    dominant-baseline: middle;
    text-anchor: middle;
  }

  .CircularProgressbar .CircularProgressbar-background {
    fill: #d6d6d6;
  }

  .CircularProgressbar.CircularProgressbar-inverted
    .CircularProgressbar-background {
    fill: #3e98c7;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-text {
    fill: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-path {
    stroke: #fff;
  }

  .CircularProgressbar.CircularProgressbar-inverted .CircularProgressbar-trail {
    stroke: transparent;
  }
`;

const ReactionButtonsContainer = styled.div`
  padding: 0px;
  display: block !important;
  margin: auto;

  .ReactionButton {
    margin: auto;
    width: 100px !important;
    margin-right: 5px;
    margin-left: 5px;
    display: inline-block;
  }
`;

const StatisticsContainer = styled.div`
  padding: 0px;
  margin: auto;
  display: block !important;
  height: 250px;
  margin-top: 6px;
  margin-bottom: 6px;
`;

export {
  Palette,
  PercentageContainer,
  ReactionButtonsContainer,
  StatisticsContainer
};
