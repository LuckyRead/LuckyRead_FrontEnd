import React, { Component } from "react";
import "./sign-up.css";
import "./loader.css";
import { FormErrors } from "../../common/formErrors/FormErrors";
import axios from "axios";
import Spinner from "react-spinkit";

class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      formErrors: { email: "" },
      emailValid: false,
      emailExists: false,
      formValid: false,
      loaded: false,
      finishloaded: false
    };
  }

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    let email_v = value;
    axios({
      method: "POST",
      url: "https://luckyread-backend.herokuapp.com/api/users/email_exist",
      data: {
        email: email_v
      }
    }).then(response => {

      if (response["data"]["email"] === "Taken") {
        this.setState({
          emailExists: true
        });
      } else {
        this.setState({
          emailExists: false
        });
      }
      this.setState({ [name]: value }, () => {
        this.validateField(name, value);
      });
    });
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      loaded: true
    });

    let email_s = this.state.email;

    axios({
      method: "POST",
      url:
        "https://luckyread-backend.herokuapp.com/api/user/send_reset_password",
      data: {
        email: email_s
      }
    })
      .then(response => {

        localStorage.setItem("jwtChangePassword", response["data"]["jwt"]);
        this.setState({
          loaded: false,
          finishloaded: true
        });
        //alert("Mensaje enviado, revisa tu correo");
        //window.location.reload(true);
      })
      .catch(function (error) {

      });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let emailExists = this.state.emailExists;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : "Email inválido";
        fieldValidationErrors.emailexists = emailExists
          ? ""
          : "Este email no está registrado";
        break;
      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        emailExists: emailExists
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.emailValid && this.state.emailExists
    });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    return (
      <div className="row" id="Init-SignUp">
        <div className="col-md-4" id="RegistrationForm">
          <div className="col-sm-12" id="Form">
            <form>
              <h2 className="SignUp-Title">Ingresa tu correo</h2>
              <div className="panel panel-default">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
              <div className="form-group" id="FormInputs">
                <input
                  type="email"
                  className="form-control"
                  id="newpassword"
                  placeholder="luckyread@example"
                  name="email"
                  onChange={this.handleUserInput}
                />
                <small id="emailHelp" className="form-text text-muted">
                  Te vamos a enviar mensaje a tu correo con los pasos a seguir.
                </small>
                {this.state.finishloaded ? (
                  <p className="text-success text-center">
                    <strong>
                      El mensaje ha sido enviado exitosamente. Revisa tu correo
                    </strong>
                  </p>
                ) : null}
              </div>
              <div className="SignUp-Button">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={this.handleClick}
                  disabled={!this.state.formValid}
                >
                  {this.state.loaded ? (
                    <Spinner name="circle" fadein="none" color="white" />
                  ) : (
                      "Enviar"
                    )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Email;
