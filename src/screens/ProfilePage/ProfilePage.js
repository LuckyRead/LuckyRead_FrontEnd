import React, { Component } from "react";
import "./ProfileContainer.css";
//Componentes
import { Row, Col } from "reactstrap";
import ProfileLeftInfo from "./ProfileLeftInfo.js";
import ProfileRightInfo from "./ProfileRightInfo.js";

class ProfilePage extends Component {
  render() {
    return (
      <div>
        <div className="ProfileContainer">
          <Row>
            <Col xs="3">
              <ProfileLeftInfo />
            </Col>
            <Col xs="9">
              <ProfileRightInfo />
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
