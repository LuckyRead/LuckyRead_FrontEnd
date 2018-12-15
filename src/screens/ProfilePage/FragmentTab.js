import React, { Component } from "react";
import { Select } from 'antd';
import {
  Button,
  Form,
  FormGroup,
  Label,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import 'antd/dist/antd.css';
import 'antd/lib/select/style/css';
import {
  TabContent, TitleContainer, Topics,
  TopicsText
} from "./Styled.js";
import AddImageFragment from './AddImageFragment';
import axios from 'axios';
import Spinner from "react-spinkit";


export default class FragmentTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: "",
      titulo: "",
      introduccion: "",
      contenido: "",
      image_id: null,
      loaded: false,
      finishloaded: false,
      all_topics: {},
      selectedTopics: []
      //image_id: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTopics = this.handleChangeTopics.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggle = this.toggle.bind(this);
    this.imageid = this.imageid.bind(this);
    this.renderTopics = this.renderTopics.bind(this)
  }


  componentDidMount() {
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/topic/alltopics",
    })
      .then(response => {
        console.log("topicos")
        const all_topics = response["data"];
        console.log(response["data"]);
        this.setState({ all_topics: all_topics });
      })
      .catch(function (error) {
        console.log("error al pedir topicos");
      });
  }


  renderTopics() {
    const topicsOptions = [];
    const topicsKeys = Object.keys(this.state.all_topics);
    topicsKeys.forEach(key => {
      topicsOptions.push(
        <Select.Option key={this.state.all_topics[key].id} value={this.state.all_topics[key].id}>{this.state.all_topics[key].topic_name}</Select.Option>
      )
    });
    return topicsOptions
  }

  handleChangeTopics(value) {
    console.log(`selected ${value}`);
    const selectedTopics = Object.values(value);
    this.setState({
      selectedTopics: selectedTopics
    })
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
    console.log(this.state[name])
  }

  imageid(id) {
    this.setState({ image_id: id })
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      loaded: true
    });
    let titulo_f = this.state.titulo;
    let introduccion_f = this.state.introduccion;
    let contenido_f = this.state.contenido;
    let image_f = this.state.image_id;
    console.log(titulo_f)
    console.log(introduccion_f)
    console.log(contenido_f)
    console.log("topics enviados", this.state.selectedTopics)
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
        image_id: image_f,
        sub_topics_id: this.state.selectedTopics
      }
    }).then(response => {
      console.log(response)
      this.setState({
        loaded: false,
        finishloaded: true
      });
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
                onChange={this.handleChange} />
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
              onChange={this.handleChange} />
          </FormGroup>
        </Form>

        <Label for="contenido">Topicos relacionados</Label>

        <Topics>
          <Select
            mode="multiple"
            style={{ width: '100%' }}
            placeholder="Elige los topicos relacionados con tu fragmento"
            defaultValue={[]}
            onChange={this.handleChangeTopics}
            color="geekblue"
          >
            {this.renderTopics()}
          </Select>
        </Topics>


        <Button color="info" style={{ marginRight: "1%" }} onClick={this.toggle}>
          Agregar imagen
        </Button>
        <Button color="info" onClick={this.handleClick}>
          {this.state.loaded ? (
            <Spinner name="circle" fadein="none" color="white" />
          ) : (
              "Subir fragmento"
            )}
        </Button>
        {this.state.finishloaded ? (
          <p className="text-success text-center">
            <strong>El fragmento ha sido creado exitosamente</strong>
          </p>
        ) : null}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}

        >
          <ModalHeader toggle={this.toggle}>Agregar imagen</ModalHeader>
          <ModalBody>
            <AddImageFragment imageid={this.imageid} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.Reload}>
              Cerrar
            </Button>{" "}
          </ModalFooter>
        </Modal>

      </TabContent>
    );
  }
}
