import React, { Component } from 'react';
import '../../styles/ProfileContainer.css';
//Componentes
import ProfileLeftInfo from './ProfileLeftInfo.js';
import ProfileRightInfo from './ProfileRightInfo.js';

class ProfileContainer extends Component {
  render() {
    return (
      <div className="ProfileContainer">
        <div className = "row">
          <div className="col-md-3">
            <ProfileLeftInfo></ProfileLeftInfo>
          </div>
          <div className="col-md-9">
            <ProfileRightInfo></ProfileRightInfo>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileContainer;
