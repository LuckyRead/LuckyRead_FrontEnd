import React from "react";
import PropTypes from "prop-types";
import { Palette, ProfileInfoContainer } from "./Styled";
import { Row, Col } from "reactstrap";

export default class ProfileInfo extends React.Component {
  render() {
    return (
      <ProfileInfoContainer>
        <Row>
          <img src={this.props.photo_src} alt="Imagen de perfil" />
        </Row>
        <Row>
          <h5>{this.props.name}</h5>
        </Row>
        <Row>
          <h6>@{this.props.nickname}</h6>
        </Row>
      </ProfileInfoContainer>
    );
  }
}

ProfileInfo.propTypes = {
  photo_src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired
};
