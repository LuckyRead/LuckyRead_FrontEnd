import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

import {
  Row,
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";
import { TabContent, RowInfo, CollapseContainer } from "./Styled.js";
import { FormErrors } from "../../common/formErrors/FormErrors";
import { userActions } from "../../_actions";
class InformationTab extends Component {
  constructor(props) {
    super(props);
    this.togglePassword = this.togglePassword.bind(this);
    this.state = {
      collapsePassword: false,
      collapseNickname: false,
      collapseCity: false,
      collapseAbout: false,
      collapseEmail: false,
      collapseUsername: false,
      password: "",
      confirmpassword: "",
      username: "",
      newUsername: "",
      city: 0,
      loaded: false,
      finishloaded: false,
      formErrors: { password: "", confirmpassword: "" },
      passwordValid: false,
      confirmpasswordValid: false,
      newUsernameValid: false,
      formValid: false
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.changeCity = this.changeCity.bind(this);
    //this.handleSubmitPassword = this.handleSubmitPassword.bind(this);
  }



  togglePassword() {
    let newState = Object.assign({}, this.state);
    newState.collapsePassword = !newState.collapsePassword;
    this.setState(newState);
  }

  toggleNickname() {
    let newState = Object.assign({}, this.state);
    newState.collapseNickname = !newState.collapseNickname;
    this.setState(newState);
  }

  toggleCity() {
    let newState = Object.assign({}, this.state);
    newState.collapseCity = !newState.collapseCity;
    this.setState(newState);
  }

  toggleAbout() {
    let newState = Object.assign({}, this.state);
    newState.collapseAbout = !newState.collapseAbout;
    this.setState(newState);
  }
  toggleEmail() {
    let newState = Object.assign({}, this.state);
    newState.collapseEmail = !newState.collapseEmail;
    this.setState(newState);
  }

  toggleUsername() {
    let newState = Object.assign({}, this.state);
    newState.collapseUsername = !newState.collapseUsername;
    this.setState(newState);
  }


  renderCities() {
    console.log("cities", this.props.citiesList)
    const citiesKeys = Object.keys(this.props.citiesList);
    const citiesOptions = []
    citiesKeys.forEach(key => {
      citiesOptions.push(
        <option value={this.props.citiesList[key].id}>{this.props.citiesList[key].name}</option>
      )
    });

    return citiesOptions
  }

  changeCity() {
    console.log("cambiando ciudad a", this.state.city)
    axios({
      method: "PATCH",
      url: "https://luckyread-backend.herokuapp.com/api/users/change_city",
      data: {
        city_id: this.state.city
      },
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          loaded: false,
          finishloaded: true
        });
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleUserInput = e => {
    console.log("name", e.target.name)
    console.log("value", e.target.value)
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state.city)
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    const { dispatch } = this.props;
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;
    let newUsernameValid = this.state.newUsernameValid;

    switch (fieldName) {
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

      case "newUsername":
        newUsernameValid = value.length <= 15 && value.length >= 3;
        fieldValidationErrors.newUsername = newUsernameValid
          ? ""
          : "Tu nombre de usuario no debe exceder los 15 caracteres";
        if (newUsernameValid) {
          console.log("dispatch verify_username");
          dispatch(userActions.verify_username(this.state.newUsername));
        }
        break;

      case "city":
        break;

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        passwordValid: passwordValid,
        confirmpasswordValid: confirmpasswordValid,
        newUsernameValid: newUsernameValid,
      },

    );
  }




  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  handleSubmitPassword = event => {
    event.preventDefault();
    console.log("submit");
    this.setState({
      loaded: true
    });
    let n_password = this.state.password;
    console.log(this.state.password);
    axios({
      method: "PATCH",
      url: "https://luckyread-backend.herokuapp.com/api/user/change_password",
      data: {
        new_password: n_password
      },
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(response => {
        console.log(response);
        this.setState({
          loaded: false,
          finishloaded: true
        });

      })
      .catch(function (error) {
        console.log(error);
      });
  };

  handleChangeNick = event => {
    event.preventDefault();
    console.log("submit");
    this.setState({
      loaded: true
    });
    let n_username = this.state.newUsername;
    console.log(this.state.username);
    axios({
      method: "PATCH",
      url: "https://luckyread-backend.herokuapp.com/api/user/change_username",
      data: {
        username: n_username
      },
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    })
      .then(response => {
        console.log("usuario cambiado")
        console.log(response);
        this.setState({
          loaded: false,
          finishloaded: true
        });
        localStorage.setItem("user", n_username)
        window.location.reload();
      })
      .catch(function (error) {
        console.log("error cambiando usuario")
        console.log(error);
      });
  };

  render() {
    return (
      <TabContent>
        <Row>
          <RowInfo>
            <Button
              color="info"
              onClick={() => this.togglePassword()}
              className="FullButton"
            >
              Cambiar contraseña
            </Button>
            <Collapse isOpen={this.state.collapsePassword}>
              <CollapseContainer>
                <Form onSubmit={this.handleSubmitPassword}>
                  <FormGroup>
                    <div className="panel panel-default">
                      <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <div
                      className={`form-group ${this.errorClass(
                        this.state.formErrors.password
                      )}`}
                      id="FormInputs"
                    >
                      <Label for="Cambiar contraseña">Nueva contraseña</Label>
                      <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Nueva contraseña"
                        onChange={this.handleUserInput}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label for="Cambiar contraseña">
                      Repetir nueva contraseña
                    </Label>
                    <Input
                      type="password"
                      name="confirmpassword"
                      id="confirmpassword"
                      placeholder="Nueva contraseña"
                      onChange={this.handleUserInput}
                    />
                    {this.state.finishloaded ? (
                      <p className="text-success text-center">
                        <strong>Contraseña cambiada exitosamente</strong>
                      </p>
                    ) : null}
                  </FormGroup>
                  <Button type="submit" color="info" disabled={!(this.state.passwordValid && this.state.confirmpasswordValid)}>
                    {this.state.loaded ? (
                      <Spinner name="circle" fadein="none" color="white" />
                    ) : (
                        "Cambiar"
                      )}
                  </Button>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>

        <Row>
          <RowInfo>
            <Button
              color="info"
              onClick={() => this.toggleNickname()}
              className="FullButton"
            >
              Cambiar nick
            </Button>
            <Collapse isOpen={this.state.collapseNickname}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
                      <Input
                        placeholder="Nombre de usuario"
                        onChange={this.handleUserInput}
                        type="text"
                        required
                        className="form-control"
                        name="newUsername"
                        value={this.state.newUsername}
                      />
                    </InputGroup>
                    <Button
                      className="ChangeButton"
                      onClick={this.handleChangeNick}
                      disabled={!this.state.newUsernameValid}>
                      {this.state.loaded ? (
                        <Spinner name="circle" fadein="none" color="white" />
                      ) : (
                          "Cambiar"
                        )}
                    </Button>
                    {this.state.finishloaded ? (
                      <p className="text-success text-center">
                        <strong>Usuario cambiado exitosamente</strong>
                      </p>
                    ) : null}
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>
        <Row>
          <RowInfo>
            <Button
              color="info"
              onClick={() => this.toggleCity()}
              className="FullButton"
            >
              Cambiar ciudad
            </Button>
            <Collapse isOpen={this.state.collapseCity}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="selectCity">Selecciona tu ciudad</Label>
                    <Input
                      type="select"
                      name="city"
                      id="selectCity"
                      onChange={this.handleUserInput}
                    >
                      {this.renderCities()}
                    </Input>
                    <Button className="ChangeButton" onClick={this.changeCity} >
                      {this.state.loaded ? (
                        <Spinner name="circle" fadein="none" color="white" />
                      ) : (
                          "Cambiar"
                        )}
                    </Button>
                    {this.state.finishloaded ? (
                      <p className="text-success text-center">
                        <strong>Ciudad cambiada exitosamente</strong>
                      </p>
                    ) : null}
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>


        <Row>
          <RowInfo>
            <Button
              color="info"
              onClick={() => this.toggleEmail()}
              className="FullButton"
            >
              Cambia tu email
            </Button>
            <Collapse isOpen={this.state.collapseEmail}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="changeEmail">Nuevo email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="changeEmail"
                      placeholder="ejemplo@ejemplo.com"
                    />
                    <Button className="ChangeButton">Cambiar</Button>
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>

        <Row>
          <RowInfo>
            <Button
              color="info"
              onClick={() => this.toggleUsername()}
              className="FullButton"
            >
              Cambia tu nombre
            </Button>
            <Collapse isOpen={this.state.collapseUsername}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="changeUsername">Nuevo nombre</Label>
                    <Input
                      type="text"
                      name="newUsername"
                      id="newUsername"
                      placeholder="Nombres"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="changeUserlastname">Nuevo apellido</Label>
                    <Input
                      type="text"
                      name="newUserlastname"
                      id="newUserlastname"
                      placeholder="Apellidos"
                    />
                    <Button className="ChangeButton">Cambiar</Button>
                  </FormGroup>
                </Form>
              </CollapseContainer>
            </Collapse>
          </RowInfo>
        </Row>
      </TabContent>
    );
  }
}


InformationTab.propTypes = {
  citiesList: PropTypes.object.isRequired,

};



function mapStateToProps(state) {

  const { validating_email } = state.email_exist;
  const { validating_username } = state.username_exist;

  return {

    validating_email,
    validating_username
  };
}

const connectedInformationTab = connect(mapStateToProps)(InformationTab);
export { connectedInformationTab as InformationTab };
