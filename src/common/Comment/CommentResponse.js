import React from "react";
import PropTypes from "prop-types";
import { ReactionButton, Right, Response, Left } from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col, Button } from "reactstrap";

export default class CommentResponse extends React.Component {
  likesResponse(id_response) {
    console.log("Le diste like a la respuesta ", id_response);
  }
  render() {
    return (
      <Response>
        <Row>
          <Col>
            <Row>
              <Col md="2">
                <Left>
                  <ProfileInfo
                    photo_src={this.props.photo_src}
                    name={this.props.name}
                    nickname={this.props.nickname}
                  />
                </Left>
              </Col>
              <Col md="10">
                <Right>
                  <p>{this.props.comment}</p>
                  <ReactionButton>
                    <Button
                      outline
                      color="success"
                      onClick={() => this.likesResponse(this.props.id_response)}
                    >
                      Like ({this.props.likes})
                    </Button>
                  </ReactionButton>
                </Right>
              </Col>
            </Row>
          </Col>
        </Row>
      </Response>
    );
  }
}
Comment.propTypes = {
  photo_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired
};
