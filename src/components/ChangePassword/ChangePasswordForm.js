import React, { Component } from 'react';
import '../../styles/sign-up.css';
import { FormErrors } from '../SignUp_LogIn/FormErrors';
import axios from 'axios';
import Spinner from 'react-spinkit';

class ChangePasswordForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      password: '',
      confirmpassword: '',
      formErrors: {password: '', confirmpassword: ''},
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false,
      loaded: false
    }
  }

  //componentDidMount(){
  //  let token = localStorage.getItem('jwtChangePassword');
  //}

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;

    switch(fieldName) {

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


    this.setState({ formErrors: fieldValidationErrors,
                    passwordValid: passwordValid,
                    confirmpasswordValid: confirmpasswordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.passwordValid && this.state.confirmpasswordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log('submit');
    this.setState({
      loaded: true
    });
    let n_password = this.state.password
    axios({
      method: 'PATCH', url: 'https://luckyread-backend.herokuapp.com/api/user/change_password',
      data: {
        new_password: n_password
      },
      headers: {
        Authorization: "Bearer " + localStorage.jwtChangePassword
      }
    }).then(response =>{
      console.log(response)
      localStorage.removeItem('jwtChangePassword');
      this.setState({
        loaded: false
      });
      alert("Contraseña cambiada");
      //window.location.reload(true);
    }).catch(function(error){
      console.log(error)
    })
  }


  render(){
    return(
      <div className="col-sm-12" id="Form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="SignUp-Title" >Cambia tu contraseña</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`} id = "FormInputs">
            <label htmlFor="newpassword">Nueva Contraseña</label>
            <input type="password"
              className="form-control"
              id="newpassword"
              placeholder="Escribe la nueva contraseña"
              name="password"
              value={this.state.password}
              onChange={this.handleUserInput}/>
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
            <label htmlFor="newpassword_r">Repite la contraseña</label>
            <input type="password"
              className="form-control"
              id="newpassword_r"
              placeholder="Repite la nueva contraseña"
              name="confirmpassword"
              value={this.state.confirmpassword}
              onChange={this.handleUserInput}/>
          </div>
          {this.state.loaded ?
            <div className="row justify-content-center" fadein="none">
              <Spinner name="circle" />
            </div>
            :null}
          <div className="SignUp-Button">
            <button type="submit"
              className="btn btn-primary"
              data-toggle="modal"
              data-backdrop="static"
              data-keyboard="false"
              data-target="#exampleModal"
              disabled={!this.state.formValid}>
                Cambiar
            </button>
          </div>
        </form>
      </div>
    )
  }
}
export default ChangePasswordForm;
