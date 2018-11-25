import React from "react";
import PropTypes from "prop-types";
import { Palette, PercentageContainer } from "./Styled";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}
