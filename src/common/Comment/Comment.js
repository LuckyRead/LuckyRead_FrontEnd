import React from "react";
import PropTypes from "prop-types";
import { Palette, PercentageContainer } from "./Styled";
import { Row, Col } from "reactstrap";

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  render() {
    return (
      <Row>
        <Col sm="3">
          <h1>Asd</h1>
        </Col>
        <Col sm="9">
          <h1>teasd</h1>
        </Col>
      </Row>
    );
  }
}
