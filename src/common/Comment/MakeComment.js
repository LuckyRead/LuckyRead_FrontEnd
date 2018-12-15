import React from "react";
import PropTypes from "prop-types";
import {
  Palette,
  CommentContainer,
  ReactionButton,
  ResponsesS,
  CommentContainerS,
  ResponseContainerS
} from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col, Button, Collapse, FormGroup, Input } from "reactstrap";
export default class MakeComment extends React.Component {
  render() {
    const t =
      this.props.type === "comment"
        ? "¡Realiza un comentario!"
        : "¡Responde a este comentario!";
    const a = this.props.type === "comment" ? "Comentar" : "Responder";
    if (this.props.type === "comment") {
      return (
        <CommentContainerS>
          <Row>
            <h4>{t}</h4>
          </Row>
          <Row>
            <FormGroup>
              <Input type="textarea" name="comment" id="commenttext" />
            </FormGroup>
          </Row>
          <Row className="responses">
            <ResponsesS>
              <Col>
                <ReactionButton>
                  <Button outline color="info">
                    {a}
                  </Button>
                </ReactionButton>
              </Col>
            </ResponsesS>
          </Row>
        </CommentContainerS>
      );
    } else {
      return (
        <ResponseContainerS>
          <Row>
            <h4>{t}</h4>
          </Row>
          <Row>
            <FormGroup>
              <Input type="textarea" name="response" id="responsetext" />
            </FormGroup>
          </Row>
          <Row className="responses">
            <ResponsesS>
              <Col>
                <ReactionButton>
                  <Button outline color="info">
                    {a}
                  </Button>
                </ReactionButton>
              </Col>
            </ResponsesS>
          </Row>
        </ResponseContainerS>
      );
    }
  }
}

MakeComment.propTypes = {
  type: PropTypes.string.isRequired
};
