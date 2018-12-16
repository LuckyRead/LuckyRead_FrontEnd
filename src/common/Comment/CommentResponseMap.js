import React from "react";
import PropTypes from "prop-types";
import { MapResponseContainer } from "./Styled";
import CommentResponse from "./CommentResponse";
import MakeComment from "./MakeComment";

export default class CommentResponseMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: this.props.comments,
      number: this.props.number
    };
  }

  renderCommentMap(data) {
    let commentaries = {};
    commentaries = [];
    data.forEach(comment => {
      const base_64_image = "data:image/png;base64, " + comment.profile_photo;
      commentaries.push(
        <CommentResponse
          photo_src={base_64_image}
          name={comment.name}
          nickname={comment.username}
          comment={comment.text}
          likes={comment.likes}
          // AUN NO ESTA id_response={comment.id}
        />
      );
    });
    return commentaries;
  }

  render() {
    return (
      <MapResponseContainer>
        {this.renderCommentMap(this.state.comments)}
        <MakeComment
          type="response"
          // AUN NO ESTA id={this.props.id_comment}
        />
      </MapResponseContainer>
    );
  }
}
CommentResponseMap.propTypes = {
  comments: PropTypes.array.isRequired,
  // AUN NO ESTA id_comment: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired
};
