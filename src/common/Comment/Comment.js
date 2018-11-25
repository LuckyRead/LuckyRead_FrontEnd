import React from "react";
import PropTypes from "prop-types";
import { Palette, CommentProfile, CommentContainer } from "./Styled";
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
      <CommentContainer>
        <Row>
          <Col sm="3">
            <CommentProfile>
              <h1>Aca va el perfil</h1>
            </CommentProfile>
          </Col>
          <Col sm="9">
            <h1>Aca va el contenido</h1>
          </Col>
        </Row>
      </CommentContainer>
    );
  }
}
