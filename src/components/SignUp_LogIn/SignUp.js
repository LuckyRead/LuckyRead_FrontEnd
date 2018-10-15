//Dependencies

import React, { Component } from 'react';

import { FormErrors } from './FormErrors';
import { SocialIcon } from 'react-social-icons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import '../../styles/sign-up.css';

class SignUp extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      nombre: '',
      apellido: '',
      email: '',
      password: '',
      confirmpassword: '',
      formErrors: {username: '', nombre: '', apellido: '', email: '', password: '', confirmpassword: ''},

      usernameValid: false,
      namesValid: false,
      lastnameValid: false,
      emailValid: false,
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false,
      confirmPass: false
    }
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {

    let fieldValidationErrors = this.state.formErrors;
    let usernameValid=this.state.namesValid;
    let namesValid =this.state.namesValid;
    let lastnameValid =this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;

    switch(fieldName) {

      case 'username':
      usernameValid = value.length <= 15 ;
      fieldValidationErrors.username =  usernameValid ? '' : 'Tu nombre de usuario no debe exceder los 15 caracteres';
      break;

      case 'nombre':
      namesValid = value.length >= 2;
      fieldValidationErrors.nombre =  namesValid ? '' : 'Nombre invalido';
      break;


      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email invalido';
        break;

      case 'password':

        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': 'Tu contrasena debe tener al menos 8 caracteres';

        confirmpasswordValid= (this.state.password===this.state.confirmpassword || passwordValid===false)
        fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contrasenas no coinciden';

        break;

      case 'confirmpassword':
      if(this.state.password===this.state.confirmpassword){
        confirmpasswordValid= true;
      }
      else{
        confirmpasswordValid=false;
      }
          fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contrasenas no coinciden';
          break;


      default:
        break;
    }


    this.setState({formErrors: fieldValidationErrors,
                    usernameValid: usernameValid,
                    namesValid: namesValid,
                    lastnameValid: lastnameValid,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                    confirmpasswordValid: confirmpasswordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.usernameValid && this.state.namesValid && this.state.emailValid && this.state.passwordValid && this.state.confirmpasswordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      username: this.state.username,
      name: this.state.nombre,
      lastname: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      cities_id: 1
    };

    axios.post(`http://localhost:3000/signin`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render () {
    return (
      <div className="Init-SignUp">
        <div className="col-sm-4" id="RegistrationForm">

      <div className="col-sm-12" id = "Form">
      <form className="demoForm">
        <h2 className="SignUp-Title" >Crea tu cuenta</h2>


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
            onChange={this.handleChange}  />
          </div>

        </div>


        <div className="form-group row">
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.nombre)}`}>
          <label htmlFor="nombre">Nombres</label>
        <input type="text" required className="form-control" name="nombre"
            placeholder="Nombres"
            value={this.state.nombre}
            onChange={this.handleChange}  />
        </div>
        </div>
          <div className="col-sm-6">
        <div className={`form-group ${this.errorClass(this.state.formErrors.apellido)}`}>
          <label htmlFor="nombre">Apellidos</label>
        <input type="text" required className="form-control" name="apellido"
            placeholder="Apellidos"
            value={this.state.apellido}
            onChange={this.handleChange}  />
        </div>
        </div>
        </div>


        <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
          <label htmlFor="email">Correo</label>
          <input type="email" required className="form-control" name="email"
            placeholder="Ingresa tu correo"
            value={this.state.email}
            onChange={this.handleChange}  />
        </div>
        <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" name="password"
            placeholder="Ingresa tu contraseña"
            value={this.state.password}
            onChange={this.handleChange}  />
        </div>

        { this.state.passwordValid ?
          <div className={`form-group ${this.errorClass(this.state.formErrors.confirmpassword)}`}>
            <label htmlFor="confirmpassword">Repite tu contraseña</label>
          <input type="password" className="form-control" name="confirmpassword"
              placeholder="Repite tu contraseña"
              value={this.state.confirmpassword}
              onChange={this.handleChange}  />
          </div>


          : null }


      <div className="SignUp-Button">
          <Link to="/homepage">
        <button  type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Registrarme</button>
          </Link>
        <br/>
        <h6></h6>
      <h6>O ingresa con tus redes sociales</h6> &nbsp;
        <br/>
        <h6></h6>
        <SocialIcon url="http://facebook.com/" /> &emsp;
        <SocialIcon url="http://twitter.com/" /> &emsp;
        <SocialIcon url="http://google.com/" /> &emsp;
      </div>
      </form>
    </div>
  </div>
      </div>
    )
  }
}

export default SignUp;
