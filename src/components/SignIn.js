import React, { Component } from 'react';
import SignInForm from './SignInForm';
import '../styles/SignIn.css';
import Navigation from './Navigation'

class SignIn extends Component {
  constructor() {
    super();
  }

  render(){
    return(

      <div className="container-fluid" >
        <Navigation></Navigation>
        <div className="col-sm-4" id="RegistrationForm">
          <SignInForm></SignInForm>
      </div>
      </div>
    )
  }

}

export default SignIn;
