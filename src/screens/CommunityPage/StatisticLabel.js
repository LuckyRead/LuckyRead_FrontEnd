import React from "react";
import PropTypes from "prop-types";
import {
  Palette,
  StatisticLabelContainer,
  TextContainer,
  NumberContainer
} from "./Styled";

export default class StatisticLabel extends React.Component {
  render() {
    const bgcolor =
      this.props.type === "global" ? Palette.gray : Palette.bluelabel;
    const bcolor =
      this.props.type === "global" ? Palette.grayoff : Palette.bluelabelborder;
    return (
      <StatisticLabelContainer bgcolor={bgcolor} bcolor={bcolor}>
        <TextContainer>{this.props.head}</TextContainer>
        <NumberContainer>{this.props.number}</NumberContainer>
        <TextContainer>{this.props.foot}</TextContainer>
      </StatisticLabelContainer>
    );
  }
}

StatisticLabel.propTypes = {
  head: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  foot: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};
