//Dependencies

import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import { SocialIcon } from 'react-social-icons';

import '../styles/log-in.css';

class LogInForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: {username: '', password: ''},

      usernameValid: false,
      passwordValid: false,
      formValid: false,
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid=this.state.namesValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {

      case 'username':
      usernameValid = value.length >= 0 ;
      fieldValidationErrors.username =  usernameValid ? '' : 'debe tener maximo 15 caracteres';
      break;

      case 'password':

        passwordValid = value.length >= 0;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';

        break;

      default:
        break;
    }


    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    passwordValid: passwordValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.passwordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div className="col-sm-12" id = "Form">
      <form className="demoForm">
        <h2 className="LogIn-Title" >Ingresa</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
          <label htmlFor="username">Usuario</label>
            <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroupPrepend2">@</span>
          </div>
        <input type="text" required className="form-control" name="username"
            placeholder="Nombre de usuario"
            value={this.state.username}
            onChange={this.handleUserInput}  />
          </div>

        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" name="password"
            placeholder="Ingresa tu contraseña"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>


      <div className="LogIn-Button">
        <button  type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Iniciar Sesion</button>
        <br/>
        <h6></h6>
        <h8>O ingresa con tus redes sociales</h8> &nbsp;
        <br/>
        <h6></h6>
        <SocialIcon url="http://facebook.com/" /> &emsp;
        <SocialIcon url="http://twitter.com/" /> &emsp;
        <SocialIcon url="http://google.com/" /> &emsp;
      </div>
      </form>
    </div>
    )
  }
}

export default LogInForm;
