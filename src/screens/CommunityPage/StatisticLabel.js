import React from "react";
import PropTypes from "prop-types";
import { Palette } from "./Styled";

export default class StatisticLabel extends React.Component {
  render() {
    return (
      <div>
        <h1>
          {this.props.head}
          {this.props.number}
          {this.props.foot}
        </h1>
      </div>
    );
  }
}

StatisticLabel.propTypes = {
  head: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  foot: PropTypes.string.isRequired
};
