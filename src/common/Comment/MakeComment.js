import React from "react";
import PropTypes from "prop-types";
import {
  ReactionButton,
  ResponsesS,
  CommentContainerS,
  ResponseContainerS
} from "./Styled";
import { Row, Col, Button, FormGroup, Input } from "reactstrap";
export default class MakeComment extends React.Component {
  comment(fragmentid) {
    console.log("Hiciste un comentario en el fragmento ", fragmentid);
  }
  response(commentid) {
    console.log("Hiciste una respuesta al comentario ", commentid);
  }

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
                  <Button
                    outline
                    color="info"
                    onClick={() => this.comment(this.props.id)}
                  >
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
                  <Button
                    outline
                    color="info"
                    onClicl={() => this.response(this.props.id)}
                  >
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
  type: PropTypes.string.isRequired,
  // Puede ser id de fragmento o id de comentario
  id: PropTypes.number.isRequired
};
