import React, { Component } from 'react';
import '../../styles/ProfileLeftInfo.css';
import paperplane from '../../resources/avatar.png';
import PopUp from './PopUp';
import axios from 'axios';

class ProfileLeftInfo extends Component {

  state = {
    posts: []
  }


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

    axios({
      method: 'GET', url: 'https://luckyread-backend.herokuapp.com/user/info',
      headers:
      {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(

      (response) => {
      console.log(response)
      this.setState({
        posts: response["data"]

      });
      console.log(this.state);
      console.log(response.data.title);

    },
    (err) => {
      console.log('el error es pidiendo fragmento random')
    }
  );





  }

  render() {
    const {posts} = this.state
    return (

      <div className="row">
      <div id="divProfile">
        <div className="card" >
          <a>
            <img className="rounded-circle" id="profileImage" width="150" height="150" src={this.state.path} alt=""></img>
          </a>
          <div className = "card-body">
            <h4 className="card-title">Usuario</h4>
            <h6 className="card-title">@PerritoLindo</h6>
          </div>
          <ul className="list-group list-group-flush" >
            <li className="list-group-item" >Bogota, Colombia</li>
            <li className="list-group-item" >Universidad de Perritos</li>
            <li className="list-group-item" >7 meses</li>
          </ul>
          <div className="card-body">
            <a className="card-link">Seguidores</a>
            <PopUp/>
            <a className="card-link">Siguiendo</a>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ProfileLeftInfo;
