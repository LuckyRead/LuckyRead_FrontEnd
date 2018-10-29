
import React, { Component } from 'react';
import '../../styles/ProfileRightInfo.css';

class ProfileRightInfo extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-6">
            <a href="http://youtube.com" className="btn btn-squared-default btn-primary btn-block" id="buttonFrag">
              <i className="fa fa-book"></i>
              <h5>Fragmentos</h5>
            </a>
          </div>
          <div className="col-md-6">
            <a href="http://youtube.com" className="btn btn-squared-default btn-success btn-block" id="buttonPref">
              <i className="fa fa-mouse-pointer"></i>
              <h5>Preferencias</h5>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <a href="http://youtube.com" className="btn btn-squared-default btn-danger btn-block" id="buttonFav">
              <i className="fa fa-star-o"></i>
              <h5>Favoritos</h5>
            </a>
          </div>
          <div className="col-md-6">
            <a href="http://youtube.com" className="btn btn-squared-default btn-info btn-block" id="buttonInfo">
              <i className="fa fa-vcard"></i>
              <h5>Informacion</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileRightInfo;
