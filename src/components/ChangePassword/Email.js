import React, { Component } from 'react';
import '../../styles/sign-up.css';
import '../../styles/loader.css';
import { FormErrors } from '../SignUp_LogIn/FormErrors';
import axios from 'axios';
import Spinner from 'react-spinkit';

class Email extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      formErrors: {email: ''},
      emailValid: false,
      emailExists: false,
      formValid: false,
      loaded: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    let email_v = value;
    axios({
      method: 'POST', url: 'https://luckyread-backend.herokuapp.com/api/users/email_exist',
      data: {
        email: email_v
      }
    }).then(response =>{
      console.log(response["data"]["email"])
      if(response["data"]["email"] === "Taken"){
        this.setState({
          emailExists: true
        })
      }else{
        this.setState({
          emailExists: false
        })
      }
      this.setState({[name]: value},
                    () => { this.validateField(name, value) });
    })
  }

  handleClick = event => {
    event.preventDefault();
    this.setState({
      loaded: true
    });
    console.log('submit');
    let email_s = this.state.email
    console.log(email_s);
    axios({
      method: 'POST', url: 'https://luckyread-backend.herokuapp.com/api/user/send_reset_password',
      data: {
        email: email_s
      }
    }).then(response =>{
      console.log(response["data"]["jwt"])
      localStorage.setItem('jwtChangePassword', response["data"]["jwt"]);
      this.setState({
        loaded: false
      });
      alert("Mensaje enviado, revisa tu correo");
      //window.location.reload(true);
    }).catch(function(error){
      console.log(error)
    })

  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let emailExists = this.state.emailExists;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Email inválido';
        fieldValidationErrors.emailexists = emailExists ? '' : 'Este email no está registrado';
      break;
      default:
      break;
    }

    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    emailExists: emailExists,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.emailExists});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  render(){
    return(
      <div className="row" id="Init-SignUp">
        <div className="col-md-4" id="RegistrationForm">
          <div className="col-sm-12" id="Form">
            <form>
              <h2 className="SignUp-Title" >Ingresa tu correo</h2>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors}/>
              </div>
              <div className="form-group" id="FormInputs">
                <input type="email"
                  className="form-control"
                  id="newpassword"
                  placeholder="luckyread@example"
                  name="email"
                  onChange={this.handleUserInput}/>
                  <small id="emailHelp" className="form-text text-muted">Te vamos a enviar mensaje a tu correo con los pasos a seguir.</small>
                  {this.state.loaded ?
                    <div className="row justify-content-center" fadein="none">
                      <Spinner name="circle" />
                    </div>
                    :null}
              </div>

              <div className="SignUp-Button">
                <button type="submit"
                  className="btn btn-primary"
                  onClick={this.handleClick}
                  disabled={!this.state.formValid}>
                    Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default Email;
