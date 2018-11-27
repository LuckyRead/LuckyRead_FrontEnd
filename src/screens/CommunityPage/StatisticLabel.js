import React from "react";
import PropTypes from "prop-types";
import { Palette, StatisticLabelContainer, TextContainer } from "./Styled";

export default class StatisticLabel extends React.Component {
  render() {
    return (
      <StatisticLabelContainer>
        <TextContainer>{this.props.head}</TextContainer>
        <TextContainer>{this.props.number}</TextContainer>
        <TextContainer>{this.props.foot}</TextContainer>
      </StatisticLabelContainer>
    );
  }
}

StatisticLabel.propTypes = {
  head: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  foot: PropTypes.string.isRequired
};
