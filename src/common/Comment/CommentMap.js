import React from "react";
import PropTypes from "prop-types";
import { Palette, MapContainer } from "./Styled";
import Comment from "./Comment";
import { Row, Col, Button } from "reactstrap";

export default class CommentMap extends React.Component {
  renderCommentMap(data) {
    let commentaries = {};
    commentaries = [];
    data.forEach(comment => {
      commentaries.push(
        <Comment
          photo_src={comment.photo_src}
          name={comment.name}
          nickname={comment.nickname}
          comment={comment.comment}
          likes={comment.likes}
          dislikes={comment.dislikes}
        />
      );
    });
    return commentaries;
  }

  render() {
    return (
      <MapContainer>
        <h1>Comentarios ({this.props.numberofcomments})</h1>
        {this.renderCommentMap(this.props.comments)}
      </MapContainer>
    );
  }
}
CommentMap.propTypes = {
  comments: PropTypes.array,
  numberofcomments: PropTypes.number.isRequired
};
