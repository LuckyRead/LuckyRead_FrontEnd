import React, { Component } from "react";
import PropTypes from "prop-types";

import { Row } from "reactstrap";
import { InformationContentS } from "./Styled.js";

export default class InformationContent extends Component {
  render() {
    return (
      <InformationContentS>
        <Row className="text">
          <h6>
            <strong>Nombre:</strong> {this.props.name}
          </h6>
        </Row>
        <Row className="text">
          <h6>
            <strong>Ciudad:</strong> {this.props.city}
          </h6>
        </Row>
        <Row className="text">
          <h6>
            <strong>Edad:</strong> {this.props.age}
          </h6>
        </Row>
        <Row className="text">
          <h6>
            <strong>Correo:</strong> {this.props.email}
          </h6>
        </Row>
      </InformationContentS>
    );
  }
}

InformationContent.propTypes = {
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
