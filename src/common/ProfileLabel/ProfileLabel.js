import React from "react";
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
                alt="Imagen de perfil"
              />
            </PhotoContainer>
          </Col>
          <Col xs="7">
            <StringLabel content="Usuario" username={true} />
            <StringLabel content="@nickname" username={false} />
          </Col>
        </Row>
      </ProfileLabelContainer>
    );
  }
}
