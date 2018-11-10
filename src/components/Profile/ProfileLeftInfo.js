import React, { Component } from 'react';
import '../../styles/ProfileLeftInfo.css';
//import paperplane from '../../resources/avatar.png';
import PopUp from './PopUp';
import axios from 'axios';

class ProfileLeftInfo extends Component {


  constructor(props){
    super(props);
    this.state = {
        //posts: [],
        path: null,
        base_64_image: null,
        user_data: ''
    };
  }

  componentWillMount(){
    axios({
      method: 'GET', url: 'https://luckyread-backend.herokuapp.com/api/user/info',
      headers:
      {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(

      (response) => {
      console.log('respuesta back con url')
      console.log(response)
      this.setState({
        user_data: response["data"]
      })
      //console.log(response["data"])
      const path_pp = 'https://luckyread-backend.herokuapp.com/api/photo/' + response["data"]["profile_photo_id"]
      // this.setState({
      //   posts: response["data"],
      //   path: path_pp

      // });
      axios({
        method: 'GET', url: path_pp
      }).then(
        (res) => {
          console.log(res);
          this.setState({
            base_64_image: 'data:image/png;base64, '+res["data"]["base64_image"]
          });
        }

      )
      //console.log(this.state);
      //console.log(response.data.title);

    },
    (err) => {
      console.log('el error es pidiendo la información usuario')
    }
  );
  }

  render() {
    return (

      <div className="row">
      <div id="divProfile">
        <div className="card" >
          <a> 
            <img className="rounded-circle" id="profileImage" width="150" height="150" src={this.state.base_64_image} alt=""></img>
          </a>
          <div className = "card-body">
            <h4 className="card-title">{this.state.user_data.name} {this.state.user_data.lastname}</h4>
            <h6 className="card-title">@{this.state.user_data.username}</h6>
          </div>
          <ul className="list-group list-group-flush" >
            <li className="list-group-item" >{this.state.user_data.city}</li>
            <li className="list-group-item" >Universidad Nacional</li>
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
