import React from "react";
import PropTypes from "prop-types";
import { MapContainer } from "./Styled";
import Comment from "./Comment";
import axios from "axios";

export default class CommentMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    this.request();
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url:
        "https://luckyread-backend.herokuapp.com/api/comment/fragment/" +
        this.props.fragmentid,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log("aqui respuesta del back");
        console.log(response.data.comments);
        if (response.data.comments !== undefined) {
          this.setState({
            comments: response.data.comments
          });
        }

      },
      err => {
        console.log("error mostrando comentarios");
      }
    );
    return;
  };

  renderCommentMap(data) {
    let commentaries = {};
    commentaries = [];
    data.forEach(comment => {
      const base_64_image = "data:image/png;base64, " + comment.profile_photo;
      commentaries.push(
        <Comment
          photo_src={base_64_image}
          name={comment.name}
          nickname={comment.username}
          comment={comment.text}
          likes={comment.likes}
        />
      );
    });
    return commentaries;
  }

  render() {
    return (
      <MapContainer>
        <h1>Comentarios ({this.state.comments.length})</h1>
        {this.renderCommentMap(this.state.comments)}
      </MapContainer>
    );
  }
}
CommentMap.propTypes = {
  fragmentid: PropTypes.number.isRequired
};
