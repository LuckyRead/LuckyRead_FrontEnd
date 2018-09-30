import React, { Component } from 'react';
import SignInForm from './SignInForm';
import '../styles/SignIn.css';

class SignIn extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className ="SingIn">
        <div className="col-sm-4" id="RegistrationForm">
          <SignInForm></SignInForm>
        </div>
      </div>
    )
  }

}

export default SignIn;
