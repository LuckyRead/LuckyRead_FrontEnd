//Dependencies

import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import Form from './Form';

//Styles

import '../styles/sign-up.css';


class SignUp extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="Init-SignUp">
        <Navigation/>
        <div className="col-sm-4" id="RegistrationForm">
        <Form />
      </div>
          </div>

    )
  }

}

export default SignUp;
