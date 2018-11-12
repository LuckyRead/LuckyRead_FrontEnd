import React, { Component } from "react";
import "./ProfileContainer.css";
//Componentes
import ProfileLeftInfo from "./ProfileLeftInfo.js";
import ProfileRightInfo from "./ProfileRightInfo.js";

class ProfilePage extends Component {
  render() {
    return (
      <div className="ProfileContainer">
        <div className="row">
          <div className="col-md-3">
            <ProfileLeftInfo />
          </div>
          <div className="col-md-9">
            <ProfileRightInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
