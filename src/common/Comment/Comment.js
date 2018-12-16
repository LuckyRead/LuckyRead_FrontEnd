import React from "react";
import PropTypes from "prop-types";
import { CommentContainer, ReactionButton, ResponsesS } from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col, Button, Collapse } from "reactstrap";
import CommentResponseMap from "./CommentResponseMap";
export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      /*       responses: [
              {
                username: "Ldcastellanosa",
                name: "Daniela",
                text: "Camilo me ama mas",
                likes: 2,
                datetime: "2018",
                liked_by_user: false,
                profile_photo: "route"
              },
              {
                username: "Caasanchezcr",
                name: "Camilo",
                text: "Es verdad",
                likes: 2,
                datetime: "2018",
                liked_by_user: false,
                profile_photo: "route"
              }
            ], */
      numberresponses: 2
    };
  }
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  likesComment(id_comment) {
    console.log("Le diste like al comentario ", id_comment);
  }
  render() {
    return (
      <CommentContainer>
        <Row>
          <Col sm="2">
            <ProfileInfo
              photo_src={this.props.photo_src}
              name={this.props.name}
              nickname={this.props.nickname}
            />
          </Col>
          <Col sm="10">
            <Row>
              <p>{this.props.comment}</p>
            </Row>
            <Row>
              <ReactionButton>
                <Button
                  outline
                  color="success"
                  onClick={() => this.likesComment(this.props.id_comment)}
                >
                  Like ({this.props.likes})
                </Button>
              </ReactionButton>
            </Row>
          </Col>
        </Row>

        { /*  <Row className="responses">
          <ResponsesS>
            <Col>
              <ReactionButton>
                <Button outline color="secondary" onClick={this.toggle}>
                  Respuestas ({this.state.numberresponses})
                </Button>
              </ReactionButton>
            </Col>
          </ResponsesS>
        </Row>
        <Collapse isOpen={this.state.collapse}>
          <CommentResponseMap
            number={this.state.numberresponses}
            comments={this.state.responses}
            // AUN NO ESTA id = {this.props.id_comment}
          />
    </Collapse> */}
      </CommentContainer>
    );
  }
}
Comment.propTypes = {
  photo_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  // AUN NO ESTA id_comment: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired
};
