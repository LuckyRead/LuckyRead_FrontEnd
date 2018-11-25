import React from "react";
import PropTypes from "prop-types";
import { Palette, CommentProfile, CommentContainer } from "./Styled";
import ProfileInfo from "./ProfileInfo";
import { Row, Col } from "reactstrap";

export default class Comment extends React.Component {
  render() {
    return (
      <CommentContainer>
        <Row>
          <Col sm="3">
            <CommentProfile>
              <ProfileInfo
                photo_src={this.props.photo_src}
                name={this.props.name}
                nickname={this.props.nickname}
              />
            </CommentProfile>
          </Col>
          <Col sm="9">
            <Row>
              <p>
                Ea culpa laborum magna amet quis laboris sunt culpa aliquip id.
                Proident qui non magna veniam adipisicing amet adipisicing eu id
                anim aliqua. Eiusmod tempor sunt commodo Lorem ea. Exercitation
                labore ad nisi Lorem labore enim velit aliqua veniam. Consequat
                adipisicing eiusmod ad ullamco sunt ullamco cupidatat veniam
                amet Lorem.
              </p>
            </Row>
            <Row>
              <button>Like</button>
              <button>Dislike</button>
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
  nickname: PropTypes.string.isRequired
};
