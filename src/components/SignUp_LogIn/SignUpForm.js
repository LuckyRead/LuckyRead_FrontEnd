//Dependencies
import API from '../../api';
import React, { Component } from 'react';
// import axios from 'axios';
import { FormErrors } from './FormErrors';

// import TextFieldGroup from '../../common/TextFieldGroup'
import PropTypes from 'prop-types';

import '../../styles/sign-up.css';
import Loading_Popup from '../../common/Loading_Popup'


class SignUpForm extends Component {
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
      usernameExists: false,
      namesValid: false,
      lastnameValid: false,
      emailValid: false,
      emailExists: false,
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false,
      confirmPass: false,
      loading: false
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
        fieldValidationErrors.nombre =  namesValid ? '' : 'Nombre inválido';
      break;

      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email inválido';
      break;

      case 'password':
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid ? '': 'Tu contraseña debe tener al menos 8 caracteres';
        confirmpasswordValid= (this.state.password===this.state.confirmpassword || passwordValid===false)
        fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contraseñas no coinciden';
      break;

      case 'confirmpassword':
        if(this.state.password===this.state.confirmpassword){
          confirmpasswordValid= true;
        }
        else{
          confirmpasswordValid=false;
        }
        fieldValidationErrors.confirmpassword = confirmpasswordValid ? '': 'Las contraseñas no coinciden';
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


  handleVerify = event =>{
    event.preventDefault();
    console.log("Verificando Usuario");
    const username= this.state.username;
    API.post(`/api/users/user_exist`, {username}).then(
      (res) => {
        console.log(res)
      },
      (err) => {
        console.log(err)
      }
    )

  }


  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      loading: true
    })
    const user = {
      username: this.state.username,
      name: this.state.nombre,
      lastname: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      city_id: 1
    };
    console.log(user);
    //
    // this.props.userSignupRequest({user});
    this.props.userSignupRequest({user}).then(
      (res) => {
        console.log('Registro exitoso')
        const auth = {
          email: this.state.email,
          password: this.state.password
        };
        this.props.login({auth}).then(
          (res) => {
            console.log('Login exitoso');
            this.props.addAllTopics();
            this.context.router.history.push('/fragmentspage')
          },
          (err) => console.log('error')
        );
        // this.context.router.history.push('/login')
      },
      (err) => console.log('Error en SignUpRequest')
    );
  }


  render () {
    return (
      <div className="col-sm-12" id = "Form">
        <form className="demoForm" onSubmit={this.handleSubmit}>
          <h2 className="SignUp-Title" >Crea tu cuenta</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.username)}`}>
            <label htmlFor="username">Usuario</label>
            <div className="input-group">
              <input type="text" required className="form-control" name="username"
                placeholder="Nombre de usuario"
                value={this.state.username}
                onChange={this.handleUserInput}/>
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6">
              <div className={`form-group ${this.errorClass(this.state.formErrors.nombre)}`}>
                <label htmlFor="nombre">Nombres</label>
                <input type="text" required className="form-control" name="nombre"
                placeholder="Nombres"
                value={this.state.nombre}
                onChange={this.handleUserInput}/>
              </div>
            </div>
            <div className="col-sm-6">
              <div className={`form-group ${this.errorClass(this.state.formErrors.apellido)}`}>
                <label htmlFor="nombre">Apellidos</label>
                <input type="text" required className="form-control" name="apellido"
                placeholder="Apellidos"
                value={this.state.apellido}
                onChange={this.handleUserInput}/>
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
          {this.state.passwordValid ?
            <div className={`form-group ${this.errorClass(this.state.formErrors.confirmpassword)}`}>
              <label htmlFor="confirmpassword">Repite tu contraseña</label>
              <input type="password" className="form-control" name="confirmpassword"
                placeholder="Repite tu contraseña"
                value={this.state.confirmpassword}
                onChange={this.handleUserInput}/>
            </div>
          :null}
        <div className="SignUp-Button">
          <button type="submit" className="btn btn-primary" data-toggle="modal" data-backdrop="static" data-keyboard="false" data-target="#exampleModal" disabled={!this.state.formValid}>
              Registrarme
          </button>
          {this.state.loading ?
            <Loading_Popup/>
          :null}
        </div>
      </form>
    </div>
    )
  }
}

SignUpForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  addAllTopics: PropTypes.func.isRequired,
  verifyEmail: PropTypes.func.isRequired,
  verifyUser:PropTypes.func.isRequired
  // isUserExists: React.PropTypes.func.isRequired
}

SignUpForm.contextTypes = {
  router: PropTypes.object.isRequired
}


export default SignUpForm;
