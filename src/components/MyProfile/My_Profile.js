import React, { Component } from 'react'
import PopUp from './PopUp'
import '../../styles/myprofile.css';
import axios from 'axios'

class My_Profile extends Component {

  constructor(props){
    super(props);
    this.state = {
        path: null
    };
  }

  componentWillMount(){
    axios({
      method: 'get',
      url: 'https://luckyread-backend.herokuapp.com/api/photo_id',
      headers: {
        Authorization: "Bearer " + localStorage.getItem('jwtToken')
      }
    }).then( response =>{
      console.log(response);
      const path_p = 'https://luckyread-backend.herokuapp.com/api/photo/' + response['data']['id']
      console.log(path_p);
      this.setState({ path: path_p});
    });
  }

  render(){
    return (
      <div className = "My_Profile">
        <div className = "row align-items-left">
          <div className = "col-4" id = "profile_picture">
            <div className = "row align-items-left" id="crop-img">
              <img src={this.state.path} alt="profile"/>
            </div>
            <PopUp/>
          </div>
        </div>
      </div>
    )
  }
}

export default My_Profile;
