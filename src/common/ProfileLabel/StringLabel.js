import React from "react";
import PropTypes from "prop-types";

import { StringContainer } from "./Styled";

export default class StringLabel extends React.Component {
  render() {
    return (
      <StringContainer username={this.props.username}>
        {this.props.content}
      </StringContainer>
    );
  }
}

StringLabel.propTypes = {
  content: PropTypes.string.isRequired,
  username: PropTypes.bool.isRequired
};
