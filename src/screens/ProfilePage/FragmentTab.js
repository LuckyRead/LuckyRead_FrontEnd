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
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { TabContent, TitleContainer } from "./Styled.js";
import AddImageFragment from './AddImageFragment';
import axios from 'axios';

export default class FragmentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: "",
      titulo: "",
      introduccion: "",
      contenido: "",
      //image_id: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value })
    console.log(this.state[name])
  }

  handleClick  = event => {
    event.preventDefault();
    let titulo_f = this.state.titulo;
    let introduccion_f = this.state.introduccion;
    let contenido_f = this.state.contenido;
    console.log(titulo_f)
    console.log(introduccion_f)
    console.log(contenido_f)
    axios({
      method: "post",
      url:
        "https://luckyread-backend.herokuapp.com/api/fragment/new",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      },
      data: {
        title: titulo_f,
        introduction: introduccion_f,
        content: contenido_f,
        source: "user",
        image_id: null,
        sub_topics_id: [1,2,3,4]
      }
    }).then(response =>{
      console.log(response)
    })
  }

  toggle() {
    let newState = Object.assign({}, this.state);
    newState.modal = !newState.modal;
    this.setState(newState);
  }

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
              <Input
                name="titulo"
                value={this.state.titulo}
                onChange={this.handleChange}/>
            </InputGroup>
          </TitleContainer>
          <FormGroup>
            <Label for="introduccion">Introduccion</Label>
            <Input
              type="textarea"
              name="introduccion"
              id="introduccion"
              value={this.state.introduccion}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="contenido">Contenido</Label>
            <Input
              type="textarea"
              name="contenido"
              id="contenido"
              value={this.state.contenido}
              onChange={this.handleChange}/>
          </FormGroup>

          <Button color="info" style={{ marginRight: "1%" }} onClick={this.toggle}>
            Agregar imagen
          </Button >
          <Button color="info" onClick={this.handleClick}>Subir fragmento</Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Agregar imagen</ModalHeader>
              <ModalBody>
                <AddImageFragment />
              </ModalBody>
              <ModalFooter>
                <Button color="primary" onClick={this.Reload}>
                  Cerrar
                </Button>{" "}
              </ModalFooter>
            </Modal>
        </Form>
      </TabContent>
    );
  }
}
