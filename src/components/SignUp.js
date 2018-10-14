//Dependencies

import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import SignUpForm from './SignUpForm';

//Styles

import '../styles/sign-up.css';


class SignUp extends Component {


  render(){
    return(
      <div className="Init-SignUp">
        <Navigation/>
        <div className="col-sm-4" id="RegistrationForm">
        <SignUpForm />
      </div>
          </div>

    )
  }

}

export default SignUp;
