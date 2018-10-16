import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import axios from 'axios';
import '../../styles/login.css';
import { FormErrors } from './FormErrors';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import TextFieldGroup from '../../common/TextFieldGroup';

class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},

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
    let emailValid=this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {

      case 'email':
      emailValid = value.length >= 0 ;
      fieldValidationErrors.email =  emailValid ? '' : 'debe tener maximo 15 caracteres';
      break;

      case 'password':

        passwordValid = value.length >= 0;
        fieldValidationErrors.password = passwordValid ? '': ' is too short';

        break;

      default:
        break;
    }


    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid,
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }


  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  handleSubmit = event => {
    event.preventDefault();
    const auth = {
      email: this.state.email,
      password: this.state.password,
    };

    event.preventDefault();
      this.props.login({auth}).then(
        (res) => this.context.router.history.push('/FragmentsPage'),
        (err) => console.log('')
      );

    // axios.post(`http://localhost:3000/api/login`, { auth })
    //   .then(res => {
    //     console.log(res);
    //     console.log(res.data);
    //   })
  }





    render() {
      return (
            <div className="col-sm-12" id = "Form">
            <form className="demoForm" onSubmit={this.handleSubmit}>
              <h2 className="LogIn-Title" >Ingresa</h2>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>

              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="email">Correo</label>
                  <div className="input-group">
              <input type="text" required className="form-control" name="email"
                  placeholder="Ejemplo:luckyread@example.com"
                  value={this.state.email}
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
              <button  type="submit" className="btn btn-primary" >Iniciar Sesion</button>
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
    )
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login })(LoginForm);
