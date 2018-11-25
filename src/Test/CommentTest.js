import React from "react";
import PropTypes from "prop-types";
import Comment from "../common/Comment/Comment";
export default class CommentTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: 0
    };
  }

  render() {
    return (
      <div>
        <Comment />
      </div>
    );
  }
}
