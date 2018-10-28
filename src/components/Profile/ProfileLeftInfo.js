import React, { Component } from 'react';
import '../../styles/ProfileLeftInfo.css';
import paperplane from '../../resources/avatar.png';
import PopUp from './PopUp'

class ProfileLeftInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
        path: null
    };
  }

  componentWillMount(){
    const id_image = localStorage.getItem('idImage');
    console.log(id_image);
    axios.get('https://luckyread-backend.herokuapp.com/api/photo/' + id_image)
    .then( response =>{
      console.log(response['request']['responseURL'])
      this.setState({ path: response['request']['responseURL']});
    });
  }

  render() {
    return (
      <div className="row">
      <div id="divProfile">
        <div className="card">
          <a href="http://lucky-read.com">
            <img className="rounded-circle" id="profileImage" width="150" height="150" src={this.state.path} alt=""></img>
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
            <PopUp/>
            <a href="http://lucky-read.com" className="card-link">Siguiendo</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileLeftInfo;
