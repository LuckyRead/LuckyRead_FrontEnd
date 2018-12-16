import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Spinner from "react-spinkit";
import {
  ReactionButton,
  ResponsesS,
  CommentContainerS,
  ResponseContainerS
} from "./Styled";
import { Row, Col, Button, FormGroup, Input } from "reactstrap";
export default class MakeComment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newcomment: "",
      number: this.props.number,
      loaded: false,
      finishloaded: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  comment(fragmentid) {
    console.log("Hiciste un comentario en el fragmento ", fragmentid);
    console.log(this.state.newcomment)
    this.setState({
      loaded: true,
      finishloaded: false
    });
    axios({
      method: "POST",
      url: "https://luckyread-backend.herokuapp.com/api/comment/new",
      data: {
        fragment_id: fragmentid,
        comment: this.state.newcomment
      },
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          loaded: false,
          finishloaded: true
        });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

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
              <Input type="textarea" name="newcomment" id="newcomment" onChange={this.handleChange} />
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
                    {this.state.loaded ? (
                      <Spinner name="circle" fadein="none" color="white" />
                    ) : (
                        "Comentar"
                      )}
                  </Button>

                  {this.state.finishloaded ? (
                    <p className="text-success text-center">
                      <strong>Comentario realizado</strong>
                    </p>
                  ) : null}
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
                    onClick={() => this.response(this.props.id)}
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
