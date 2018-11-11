import React, { Component } from "react";
import "./login.css";
import { FormErrors } from "../../common/formErrors/FormErrors";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "react-spinkit";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      formErrors: { email: "", password: "" },
      authNotFail: false,
      emailValid: false,
      passwordValid: false,
      formValid: false,
      loaded: false,
      loadedgoogle: false,
      loadedfb: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

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

  render() {
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
              onChange={this.handleUserInput}
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
              onChange={this.handleUserInput}
            />
          </div>

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
          </div>
          <br />
        </form>
      </div>
    );
  }
}

export default LoginForm;
