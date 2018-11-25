import React from "react";
import PropTypes from "prop-types";
import Comment from "../common/Comment/Comment";
export default class CommentTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photo_src:
        "https://i.pinimg.com/originals/eb/c0/b8/ebc0b80c3b619fa4ef3b3882cad3c191.jpg",
      name: "Camiela",
      nickname: "Camiela2121"
    };
  }

  render() {
    return (
      <div>
        <Comment
          photo_src={this.state.photo_src}
          name={this.state.name}
          nickname={this.state.nickname}
        />
      </div>
    );
  }
}
