import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { userActions } from "../../_actions";
import { FormErrors } from "../../common/formErrors/FormErrors";
import "./sign-up.css";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      nombre: "",
      apellido: "",
      email: "",
      password: "",
      confirmpassword: "",
      formErrors: {
        username: "",
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmpassword: ""
      },

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
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    const { dispatch } = this.props;
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.namesValid;
    let namesValid = this.state.namesValid;
    let lastnameValid = this.state.lastnameValid;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;

    switch (fieldName) {
      case "username":
        usernameValid = value.length <= 15;
        fieldValidationErrors.username = usernameValid
          ? ""
          : "Tu nombre de usuario no debe exceder los 15 caracteres";
        if (usernameValid) {
          console.log("dispatch verify_username");
          dispatch(userActions.verify_username(this.state.username));
        }
        break;

      case "nombre":
        namesValid = value.length >= 2;
        fieldValidationErrors.nombre = namesValid ? "" : "Nombre inválido";
        break;

      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email inválido";

        if (emailValid) {
          console.log("dispatch verify_username");
          dispatch(userActions.verify_email(this.state.email));
        }
        break;

      case "password":
        passwordValid = value.length >= 8;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Tu contraseña debe tener al menos 8 caracteres";
        confirmpasswordValid =
          this.state.password === this.state.confirmpassword ||
          passwordValid === false;
        fieldValidationErrors.confirmpassword = confirmpasswordValid
          ? ""
          : "Las contraseñas no coinciden";
        break;

      case "confirmpassword":
        if (this.state.password === this.state.confirmpassword) {
          confirmpasswordValid = true;
        } else {
          confirmpasswordValid = false;
        }
        fieldValidationErrors.confirmpassword = confirmpasswordValid
          ? ""
          : "Las contraseñas no coinciden";
        break;

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        usernameValid: usernameValid,
        namesValid: namesValid,
        lastnameValid: lastnameValid,
        emailValid: emailValid,
        passwordValid: passwordValid,
        confirmpasswordValid: confirmpasswordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.usernameValid &&
        this.state.namesValid &&
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.confirmpasswordValid
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const user = {
      username: this.state.username,
      name: this.state.nombre,
      lastname: this.state.apellido,
      email: this.state.email,
      password: this.state.password,
      city_id: 1
    };

    const auth = {
      email: this.state.email,
      password: this.state.password
    };
    const { dispatch } = this.props;
    console.log("dispatch register");
    dispatch(userActions.register({ user }));
  };

  render() {
    const { registering } = this.props;
    const { validating_email } = this.props;
    const { validating_username } = this.props;

    return (
      <div className="col-sm-12" id="Form">
        <form className="demoForm" onSubmit={this.handleSubmit}>
          <h2 className="SignUp-Title">Crea tu cuenta</h2>
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.username
            )}`}
          >
            <label htmlFor="username">Usuario</label>
            {validating_username && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="loading gif"
              />
            )}
            <div className="input-group">
              <input
                type="text"
                required
                className="form-control"
                name="username"
                placeholder="Nombre de usuario"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-6">
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.nombre
                )}`}
              >
                <label htmlFor="nombre">Nombres</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="nombre"
                  placeholder="Nombres"
                  value={this.state.nombre}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.apellido
                )}`}
              >
                <label htmlFor="nombre">Apellidos</label>
                <input
                  type="text"
                  required
                  className="form-control"
                  name="apellido"
                  placeholder="Apellidos"
                  value={this.state.apellido}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div
            className={`form-group ${this.errorClass(
              this.state.formErrors.email
            )}`}
          >
            <label htmlFor="email">Correo</label>
            {validating_email && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="loading gif"
              />
            )}
            <input
              type="email"
              required
              className="form-control"
              name="email"
              placeholder="Ingresa tu correo"
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
          {this.state.passwordValid ? (
            <div
              className={`form-group ${this.errorClass(
                this.state.formErrors.confirmpassword
              )}`}
            >
              <label htmlFor="confirmpassword">Repite tu contraseña</label>
              <input
                type="password"
                className="form-control"
                name="confirmpassword"
                placeholder="Repite tu contraseña"
                value={this.state.confirmpassword}
                onChange={this.handleChange}
              />
            </div>
          ) : null}

          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary"
              data-toggle="modal"
              data-backdrop="static"
              data-keyboard="false"
              data-target="#exampleModal"
              disabled={!this.state.formValid || registering}
            >
              Registrarme
            </button>
            {registering && (
              <img
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                alt="loading gif"
              />
            )}
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { registering } = state.registration;
  const { validating_email } = state.email_exist;
  const { validating_username } = state.username_exist;

  return {
    registering,
    validating_email,
    validating_username
  };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterForm);
export { connectedRegisterPage as RegisterForm };
