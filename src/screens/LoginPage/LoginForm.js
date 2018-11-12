import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { userActions } from "../../_actions";
import Spinner from "react-spinkit";
import { FormErrors } from "../../common/formErrors/FormErrors";
import GoogleLogin from "react-google-login";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    /*     // reset login status
    this.props.dispatch(userActions.logout()); */

    this.state = {
      username: "",
      password: "",
      formErrors: { email: "", password: "" },

      authNotFail: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      loaded: false,
      loadedgoogle: false,
      loadedfb: false,
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let authNotFail = this.state.authNotFail;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email inválido";
        break;

      case "password":
        passwordValid = value.length > 0;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Ingresa tu contraseña";
        break;

      /*       case "auth":
        fieldValidationErrors.auth = authNotFail
          ? ""
          : "el email y la contraseña no coinciden";
        break; */

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.passwordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted");

    const auth = {
      email: this.state.email,
      password: this.state.password
    };
    const { dispatch } = this.props;
    console.log("dispatch login");
    dispatch(userActions.login(auth));
    /*     this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    } */

    /*     event.preventDefault();
    this.props.login({ auth }).then(
      res => {
        //console.log('res: ')
        //console.log(res)
        this.setState({
          loaded: true
        });
        if (res["status"] === 201) {
          this.context.router.history.push("/fragmentspage");
        } else {
          //alert('El usuario y la contraseña no coinciden')
          this.setState({
            loaded: false,
            authNotFail: true
          });
        }
        this.validateField(auth, "auth");
      },
      err => console.log("error con login normal")
    ); */
  }

  render() {
    const { loggingIn } = this.props;
    const { username, password, submitted } = this.state;

    /*    const responseFacebook = response => {
      if (response) {
        console.log(response);
        this.setState({
          loadedfb: true
        });
        this.signup(response, "facebook");
      }
    };
    const responseGoogle = response => {
      if (response) {
        console.log(response);
        this.setState({
          loadedgoogle: true
        });
        this.signup(response, "google");
      }
    }; */
    return (
      <div className="col-sm-12" id="Form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="LogIn-Title">Ingresa</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label htmlFor="email">Correo</label>
            <input
              type="text"
              required
              className="form-control"
              name="email"
              placeholder="Ejemplo:luckyread@example.com"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.password
            )}`}
          >
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Ingresa tu contraseña"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          {/* this.state.authNotFail ? (
            <p className="text-danger text-center small">
              <strong>*El usuario y la contraseña no coinciden</strong>
            </p>
          ) : null */}
          <div className="LogIn-Button">
            <Button
              type="submit"
              color="primary"
              disabled={!this.state.formValid}
            >
              {this.state.loaded ? (
                <Spinner name="circle" fadein="none" color="white" />
              ) : (
                "Iniciar sesión"
              )}
            </Button>
            <Button color="link" size="sm" href="/Email">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>
          {/* <div className="Social">
            <p>O ingresa con tu redes sociales</p>
            <FacebookLogin
              appId="175675156693690"
              autoLoad={true}
              fields="name,email,picture"
              callback={responseFacebook}
              render={renderProps => (
                <Button id="facebook" size="sm" onClick={renderProps.onClick}>
                  {this.state.loadedfb ? (
                    <Spinner name="circle" fadein="none" color="white" />
                  ) : (
                    <strong>Facebook</strong>
                  )}
                </Button>
              )}
            />
            &nbsp;&nbsp;
            <GoogleLogin
              clientId="1031528270008-p1pd4mi00m1igslrh342thmnpr1ram1t.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              render={renderProps => (
                <Button color="danger" size="sm" onClick={renderProps.onClick}>
                  {this.state.loadedgoogle ? (
                    <Spinner name="circle" fadein="none" color="white" />
                  ) : (
                    <strong>Google</strong>
                  )}
                </Button>
              )}
            />
          </div> */}
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginForm = connect(mapStateToProps)(LoginForm);
export { connectedLoginForm as LoginForm };
