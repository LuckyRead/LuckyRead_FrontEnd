import React from "react";
import PropTypes from "prop-types";
import { ProfileInfoContainer } from "./Styled";

export default class ProfileInfo extends React.Component {
  render() {
    return (
      <ProfileInfoContainer>
        <img src={this.props.photo_src} alt="Imagen de perfil" />
        <div className="name">{this.props.name}</div>
        <div className="nickname">@{this.props.nickname}</div>
      </ProfileInfoContainer>
    );
  }
}

ProfileInfo.propTypes = {
  photo_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired
};
