import React from "react";
import PropTypes from "prop-types";

import {
  ProfileLabelContainer,
  PhotoContainer,
  StringContainer
} from "./Styled";
import { Row, Col } from "reactstrap";

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
