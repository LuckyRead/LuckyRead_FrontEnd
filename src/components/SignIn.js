import React, { Component } from 'react';
import Form from './Form';
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
          <Form/>
      </div>
      </div>
    )
  }

}

export default SignIn;
