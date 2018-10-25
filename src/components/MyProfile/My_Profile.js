import React, { Component } from 'react'
import PopUp from './PopUp'
import '../../styles/myprofile.css';

class My_Profile extends Component {
  render(){
    return (
      <div className = "My_Profile">
        <div className = "row">
          <div className = "col-4" id = "profile_picture">
            <PopUp/>
          </div>
        </div>
      </div>
    )
  }
}

export default My_Profile;
