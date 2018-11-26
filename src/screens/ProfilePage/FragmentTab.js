import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  FormText
} from "reactstrap";
import { TabContent, TitleContainer } from "./Styled.js";

export default class FragmentTab extends Component {
  render() {
    return (
      <TabContent>
        <h4 style={{ textAlign: "center", marginBottom: "2%" }}>
          ¡Crea tu propio fragmento!
        </h4>
        <Form>
          <TitleContainer>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>Titulo</InputGroupText>
              </InputGroupAddon>
              <Input />
            </InputGroup>
          </TitleContainer>
          <FormGroup>
            <Label for="introduccion">Introduccion</Label>
            <Input type="textarea" name="introduccion" id="introduccion" />
          </FormGroup>
          <FormGroup>
            <Label for="contenido">Contenido</Label>
            <Input type="textarea" name="contenido" id="contenido" />
          </FormGroup>
          <Button color="info" style={{ marginRight: "1%" }}>
            Agregar imagen
          </Button>
          <Button color="info">Subir fragmento</Button>
        </Form>
      </TabContent>
    );
  }
}
