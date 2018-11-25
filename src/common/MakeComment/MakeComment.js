import React from "react";
import { Palette, MakeCommentContainer, TitleContainer } from "./Styled";
import { Row, Col, Button } from "reactstrap";

export default class Comment extends React.Component {
  render() {
    return (
      <MakeCommentContainer>
        <TitleContainer>Realiza un comentario</TitleContainer>
      </MakeCommentContainer>
    );
  }
}
