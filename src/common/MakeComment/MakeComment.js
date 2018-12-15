import React from "react";
import { MakeCommentContainer, TitleContainer } from "./Styled";
import { Button, FormGroup, Form, Input } from "reactstrap";

export default class Comment extends React.Component {
  render() {
    return (
      <MakeCommentContainer>
        <TitleContainer>Realiza un comentario</TitleContainer>
        <Form>
          <FormGroup>
            <Input type="textarea" name="text" id="comment" />
          </FormGroup>
          <Button color="info" style={{ height: "30px" }}>
            <h6>Publicar</h6>
          </Button>
        </Form>
      </MakeCommentContainer>
    );
  }
}
