//Dependencies

import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import { SocialIcon } from 'react-social-icons';

import '../styles/sign-up.css';

class SignUpForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      nombre: '',
      apellido: '',
      email: '',
      password: '',

      formErrors: {nombre: '', apellido: '', email: '', password: ''},

      namesValid: false,
      lastnameValid: false,
      emailValid: false,
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

    let namesValid =this.state.namesValid;
    let lastnameValid =this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;


    switch(fieldName) {



      case 'nombre':
      namesValid = value.length >= 3;
      fieldValidationErrors.nombre =  namesValid ? '' : 'debe ser de mas de 3 caracteres';
      break;


      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;

      case 'password':

        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';


        break;




      default:
        break;
    }


    this.setState({formErrors: fieldValidationErrors,

                    namesValid: namesValid,
                    lastnameValid: lastnameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid,

                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.namesValid && this.state.emailValid && this.state.passwordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render () {
    return (
      <div className="col-sm-12" id = "Form">
      <form className="demoForm">
        <h2 className="SignUp-Title" >Crea tu cuenta</h2>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>



        <div className="form-group row">
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.nombre)}`}>
          <label htmlFor="nombre">Nombres</label>
        <input type="text" required className="form-control" name="nombre"
            placeholder="Nombres"
            value={this.state.nombre}
            onChange={this.handleUserInput}  />
        </div>
        </div>
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.apellido)}`}>
          <label htmlFor="nombre">Apellidos</label>
        <input type="text" required className="form-control" name="apellido"
            placeholder="Apellidos"
            value={this.state.apellido}
            onChange={this.handleUserInput}  />
        </div>
        </div>
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Correo</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Ingresa tu correo"
            value={this.state.email}
            onChange={this.handleUserInput}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" name="password"
            placeholder="Ingresa tu contraseña"
            value={this.state.password}
            onChange={this.handleUserInput}  />
        </div>



      <div className="SignUp-Button">
        <button  type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Registrarme</button>
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

export default SignUpForm;
