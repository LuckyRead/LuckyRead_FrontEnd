import React, { Component } from 'react'
import Avatar from './Avatar'

class My_Profile extends Component {
  render(){
    return (
      <div className = "My_Profile">
        <div className = "row">
          <div className = "col-4" id = "profile_picture">
            <Avatar/>
          </div>
        </div>
      </div>
    )
  }
}

export default My_Profile;
