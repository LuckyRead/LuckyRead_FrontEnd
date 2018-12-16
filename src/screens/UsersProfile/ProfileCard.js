import React, { Component } from "react";
import axios from "axios";

import {
  ProfileCardDiv,
  ProfilePhotoContainer,
  InfoContainer,
  AllInfoContainer
} from "./Styled";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: ""
    };
  }


  componentWillMount() {
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/user/all_info_user/" + this.props.username,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log("respuesta back con url");
        console.log(response["data"][0]);
        let newState = Object.assign({}, this.state);
        newState.user_data = response["data"][0];
        this.setState(newState);
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
          <img alt="Imagen de perfil" src={"data:image/png;base64, " + this.state.user_data.photo} />
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
      </ProfileCardDiv>
    );
  }
}
