import React from "react";
import PropTypes from "prop-types";
import { ProfileLabelContainer, PhotoContainer } from "./Styled";
import { Row, Col } from "reactstrap";
import StringLabel from "./StringLabel";
export default class ProfileLabel extends React.Component {
  render() {
    return (
      <ProfileLabelContainer>
        <Row>
          <Col xs="5">
            <PhotoContainer>
              <img
                src={require("../../resources/avatar.png")}
                //  src={this.props.photosrc}
                alt="Imagen de perfil"
              />
            </PhotoContainer>
          </Col>
          <Col xs="7">
            <StringLabel content={this.props.username} username={true} />
            <StringLabel content={"@" + this.props.nickname} username={false} />
          </Col>
        </Row>
      </ProfileLabelContainer>
    );
  }
}
ProfileLabel.propTypes = {
  username: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  photosrc: PropTypes.string.isRequired
};
