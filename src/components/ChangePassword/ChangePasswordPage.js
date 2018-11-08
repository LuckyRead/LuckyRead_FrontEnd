import React, { Component } from 'react';
import ChangePasswordForm from './ChangePasswordForm';
import '../../styles/sign-up.css';


class ChangePasswordPage extends Component {
  render(){
    return(
      <div>
      <div className="row" id="Init-SignUp">
        <div className="col-md-4" id="RegistrationForm">
          <ChangePasswordForm/>
        </div>
      </div>
      </div>
    )
  }
}
export default ChangePasswordPage;
