import React, { Component } from 'react';
import '../../styles/ProfileLeftInfo.css';
import paperplane from '../../resources/avatar.png';
class ProfileLeftInfo extends Component {
  render() {
    return (
      <div className="row">
      <div id="divProfile">
        <div className="card">
          <a href="http://lucky-read.com">
            <img className="rounded-circle" id="profileImage" width="150" height="150" src={paperplane} alt=""></img>
          </a>
          <div className = "card-body">
            <h4 className="card-title">Perrito Sorprendido</h4>
            <h6 className="card-title">@PerritoLindo</h6>
          </div>
          <ul className="list-group list-group-flush" >
            <li className="list-group-item" >Bogota, Colombia</li>
            <li className="list-group-item" >Universidad de Perritos</li>
            <li className="list-group-item" >7 meses</li>
          </ul>
          <div className="card-body">
            <a href="http://lucky-read.com" className="card-link">Seguidores</a>
            <a href="http://lucky-read.com" className="card-link">Cambiar foto</a>
            <a href="http://lucky-read.com" className="card-link">Siguiendo</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileLeftInfo;
