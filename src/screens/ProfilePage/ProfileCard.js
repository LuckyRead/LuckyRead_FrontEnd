import React, { Component } from "react";
import PopUp from "./PopUp";
import axios from "axios";
import { Row, Col } from "reactstrap";
import {
  ProfileCardDiv,
  ProfilePhotoContainer,
  InfoContainer,
  Palette,
  AllInfoContainer
} from "./Styled";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //posts: [],
      path: null,
      base_64_image: null,
      user_data: ""
    };
  }

  render() {
    return (
      <ProfileCardDiv>
        <ProfilePhotoContainer>
          <img
            alt="Imagen de perfil"
            src={require("../../resources/avatar.png")}
          />
        </ProfilePhotoContainer>
        <AllInfoContainer>
          <InfoContainer>
            <h5>Camilo Alejandro Sanchez Cruz</h5>
          </InfoContainer>
          <InfoContainer>
            <div className="skinny">@Camiela2121</div>
          </InfoContainer>
          <InfoContainer margin="2%">
            <div className="skinny">Bogota, Colombia</div>
          </InfoContainer>
          <InfoContainer margin="5%">
            <div className="about">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              eiusmod tempor incidunt ut labore et dolore magna aliqua."
            </div>
          </InfoContainer>
          <InfoContainer border margin="3%">
            <PopUp />
          </InfoContainer>
        </AllInfoContainer>
      </ProfileCardDiv>
    );
  }
}
