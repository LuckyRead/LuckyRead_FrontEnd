import React, { Component } from 'react';
import '../../styles/login.css';
import { FormErrors } from './FormErrors';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';

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

  signup(res, type){
    console.log('hola '+ type);
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
        (res) => this.context.router.history.push('/fragmentspage'),
        (err) => console.log('error')
      );
  }

    render() {
      const responseFacebook = (response) => {
        console.log(response);
        this.signup(response, 'facebook');
      }
      const responseGoogle = (response) => {
        console.log(response);
        this.signup(response, 'google');
      }
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
            </div>
            <br/>
            <div className="Social">
            O ingresa con tu redes sociales
            <FacebookLogin
              appId="175675156693690"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              render={renderProps => (
                <Button color="primary" onClick={renderProps.onClick}>Facebook</Button>
              )}
            />&nbsp;&nbsp;
              <GoogleLogin
                clientId="1031528270008-p1pd4mi00m1igslrh342thmnpr1ram1t.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={renderProps => (
                  <Button color="danger" onClick={renderProps.onClick}>Google</Button>
                )}
              />
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
