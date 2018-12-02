import React, { Component } from "react";
import axios from "axios";
import {
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import {
  ProfileCardDiv,
  ProfilePhotoContainer,
  InfoContainer,
  Palette,
  AllInfoContainer
} from "./Styled";
import ChangeAvatar from "./ChangeAvatar";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      //posts: [],
      path: null,
      base_64_image: null,
      user_data: ""
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    let newState = Object.assign({}, this.state);
    newState.modal = !newState.modal;
    this.setState(newState);
  }
  Reload() {
    window.location.reload();
  }
  componentWillMount() {
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/user/info",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log("respuesta back con url");
        console.log(response);
        let newState = Object.assign({}, this.state);
        newState.user_data = response["data"];
        this.setState(newState);

        //console.log(response["data"])
        const path_pp =
          "https://luckyread-backend.herokuapp.com/api/photo/" +
          response["data"]["profile_photo_id"];
        // this.setState({
        //   posts: response["data"],
        //   path: path_pp

        // });
        axios({
          method: "GET",
          url: path_pp
        }).then(res => {
          console.log(res);
          let newState = Object.assign({}, this.state);
          newState.base_64_image =
            "data:image/png;base64, " + res["data"]["base64_image"];
          this.setState(newState);
        });
        //console.log(this.state);
        //console.log(response.data.title);
      },
      err => {
        console.log("el error es pidiendo la información usuario");
      }
    );
  }

  render() {
    const talkToUs = this.state.user_data.talk_to_us
      ? this.state.user_data.talk_to_us
      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.";

    return (
      <ProfileCardDiv>
        <ProfilePhotoContainer>
          <a onClick={this.toggle}>
            <img alt="Imagen de perfil" src={this.state.base_64_image} />
          </a>
        </ProfilePhotoContainer>

        <AllInfoContainer>
          <InfoContainer>
            <h5>
              {this.state.user_data.name} {this.state.user_data.lastname}
            </h5>
          </InfoContainer>
          <InfoContainer>
            <div className="skinny">@{this.state.user_data.username}</div>
          </InfoContainer>
          <InfoContainer marginTop="2%">
            <div className="skinny">{this.state.user_data.city}</div>
          </InfoContainer>
          <InfoContainer border marginTop="5%" marginBottom="10%">
            <div className="about">{talkToUs}</div>
          </InfoContainer>
        </AllInfoContainer>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Cambiar foto de perfil</ModalHeader>
          <ModalBody>
            <ChangeAvatar />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.Reload}>
              Cerrar
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </ProfileCardDiv>
    );
  }
}
