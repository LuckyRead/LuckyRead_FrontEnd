import React from "react";
import PropTypes from "prop-types";
import Comment from "../common/Comment/Comment";
export default class CommentTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          photo_src:
            "https://i.pinimg.com/originals/eb/c0/b8/ebc0b80c3b619fa4ef3b3882cad3c191.jpg",
          name: "Camiela Cruz",
          nickname: "Camiela2121",
          comment:
            "Incididunt pariatur fugiat dolore enim eiusmod. Exercitation elit Lorem ex ut ex labore et occaecat laborum dolore. Quis ullamco incididunt excepteur occaecat Lorem quis enim fugiat sunt magna Lorem consectetur deserunt. Eiusmod laboris adipisicing aute tempor incididunt cupidatat ullamco ullamco do aliquip id veniam nulla. Culpa tempor occaecat irure id commodo. Excepteur deserunt ex do quis quis nulla ad fugiat minim officia quis. Laborum fugiat dolor nisi id reprehenderit irure aute nulla officia dolore incididunt ex ullamco.",
          likes: 69,
          dislikes: 10
        },
        {
          photo_src:
            "https://i.pinimg.com/originals/eb/c0/b8/ebc0b80c3b619fa4ef3b3882cad3c191.jpg",
          name: "Daniela Castellanos",
          nickname: "DaniCastel",
          comment:
            "Incididunt pariatur fugiat dolore enim eiusmod. Exercitation elit Lorem ex ut ex labore et occaecat laborum dolore. Quis ullamco incididunt excepteur occaecat Lorem quis enim fugiat sunt magna Lorem consectetur deserunt. Eiusmod laboris adipisicing aute tempor incididunt cupidatat ullamco ullamco do aliquip id veniam nulla. Culpa tempor occaecat irure id commodo. Excepteur deserunt ex do quis quis nulla ad fugiat minim officia quis. Laborum fugiat dolor nisi id reprehenderit irure aute nulla officia dolore incididunt ex ullamco.",
          likes: 40,
          dislikes: 0
        },
        {
          photo_src:
            "https://i.pinimg.com/originals/eb/c0/b8/ebc0b80c3b619fa4ef3b3882cad3c191.jpg",
          name: "Camilo Sanchez",
          nickname: "Camilo3798",
          comment:
            "Incididunt pariatur fugiat dolore enim eiusmod. Exercitation elit Lorem ex ut ex labore et occaecat laborum dolore. Quis ullamco incididunt excepteur occaecat Lorem quis enim fugiat sunt magna Lorem consectetur deserunt. Eiusmod laboris adipisicing aute tempor incididunt cupidatat ullamco ullamco do aliquip id veniam nulla. Culpa tempor occaecat irure id commodo. Excepteur deserunt ex do quis quis nulla ad fugiat minim officia quis. Laborum fugiat dolor nisi id reprehenderit irure aute nulla officia dolore incididunt ex ullamco.",
          likes: 60,
          dislikes: 30
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <Comment comments={this.state.comments} />
      </div>
    );
  }
}
