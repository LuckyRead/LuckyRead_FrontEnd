import React from "react";
import PropTypes from "prop-types";
import { Palette, CommentContainer, ReactionButton } from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col, Button } from "reactstrap";

export default class Comment extends React.Component {
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
                <Button outline color="success">
                  Like ({this.props.likes})
                </Button>
              </ReactionButton>

            </Row>
          </Col>
        </Row>
      </CommentContainer>
    );
  }
}
Comment.propTypes = {
  photo_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,

};
