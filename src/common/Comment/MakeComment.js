import React from "react";
import PropTypes from "prop-types";
import {
  Palette,
  CommentContainer,
  ReactionButton,
  ResponsesS,
  CommentContainerS
} from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col, Button, Collapse, FormGroup, Input } from "reactstrap";
export default class MakeComment extends React.Component {
  render() {
    return (
      <CommentContainerS>
        <Row>
          <h4>¡Realiza un comentario!</h4>
        </Row>
        <Row>
          <FormGroup>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
        </Row>
        <Row className="responses">
          <ResponsesS>
            <Col>
              <ReactionButton>
                <Button outline color="info">
                  Comentar
                </Button>
              </ReactionButton>
            </Col>
          </ResponsesS>
        </Row>
      </CommentContainerS>
    );
  }
}
