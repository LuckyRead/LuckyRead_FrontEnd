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
    const id_image = localStorage.getItem('idImage');
    console.log(id_image);
    axios.get('https://luckyread-backend.herokuapp.com/api/photo/' + id_image)
    .then( response =>{
      console.log(response['request']['responseURL'])
      this.setState({ path: response['request']['responseURL']});
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
