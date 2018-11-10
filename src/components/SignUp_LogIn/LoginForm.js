import React, { Component } from 'react';
import '../../styles/login.css';
import { FormErrors } from './FormErrors';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, login_social } from '../../actions/authActions';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
import axios from 'axios';


class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},

      authNotFail: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }
    this.signup = this.signup.bind(this);
  }


// signup - login FB and Google
  signup(res, type){
    if (type === 'facebook'){
      console.log('token facebook')
      axios.post("https://luckyread-backend.herokuapp.com/api/login/fb", res)
      .then(res =>{
        const token = res['data']['jwt']
        const user = res['data']['username']
        console.log(res)
        this.props.login_social(token, user)
        this.context.router.history.push('/fragmentspage')
      }).catch(function (error) {
        console.log('error al tratar de conseguir token del back - facebook');
      });
    }else{
      console.log('token google');
      axios.post("https://luckyread-backend.herokuapp.com/api/login/ggle", res)
      .then(res =>{
        const token = res['data']['jwt']
        const user = res['data']['username']
        console.log(res)
        this.props.login_social(token, user)
        this.context.router.history.push('/fragmentspage')
      }).catch(function (error) {
        console.log('error al tratar de conseguir token del back - google');
      });
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
    let authNotFail = this.state.authNotFail;

    switch(fieldName) {

      case 'email':
        emailValid = value.length >= 0 ;
        fieldValidationErrors.email =  emailValid ? '' : 'debe tener maximo 15 caracteres';
      break;

      case 'password':
        passwordValid = value.length >= 0;
        fieldValidationErrors.password = passwordValid ? '': 'contraseña muy corta';
      break;

      case 'auth':
        fieldValidationErrors.auth = authNotFail ? '': 'el email y la contraseña no coinciden';
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
        (res) => {
          //console.log('res: ')
          //console.log(res)
          if(res['status'] === 201){
            this.context.router.history.push('/fragmentspage')
            this.setState({authNotFail: true});

          }else{
            alert('El usuario y la contraseña no coinciden')
          }
          this.validateField(auth, 'auth')
        },
        (err) => console.log('error con login normal')
      );
  }


    render() {
      const responseFacebook = (response) => {
        if (response){
          console.log(response);
          this.signup(response, 'facebook');
        }

      }
      const responseGoogle = (response) => {
        if (response){
          console.log(response);
          this.signup(response, 'google');
        }

      }
      return (
          <div className="col-sm-12" id = "Form">
            <form onSubmit={this.handleSubmit}>
              <h2 className="LogIn-Title" >Ingresa</h2>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors}/>
              </div>
              <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="email">Correo</label>
                <input type="text" required className="form-control" name="email"
                  placeholder="Ejemplo:luckyread@example.com"
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
              <div className="LogIn-Button">
                <Button  type="submit" color="primary">Iniciar sesión</Button>
                <Button color="link" size="sm" tag={Link} to="/email">¿Olvidaste tu contraseña?</Button>
              </div>
              <br/>
              <div className="Social">
                <p>O ingresa con tu redes sociales</p>
                <FacebookLogin
                  appId="175675156693690"
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  render={renderProps => (
                    <Button color="primary" size="sm" onClick={renderProps.onClick}><strong>Facebook</strong></Button>
                  )}
                />&nbsp;&nbsp;
                <GoogleLogin
                  clientId="1031528270008-p1pd4mi00m1igslrh342thmnpr1ram1t.apps.googleusercontent.com"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  render={renderProps => (
                    <Button color="danger" size="sm" onClick={renderProps.onClick}><strong>Google</strong></Button>
                  )}
                />
              </div>
          </form>
        </div>
    )
  }
}


LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
  login_social: PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default connect(null, { login, login_social })(LoginForm);
