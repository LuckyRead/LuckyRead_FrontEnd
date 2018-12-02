import React, { Component } from "react";
import Spinner from "react-spinkit";
import {
  Row,
  Col,
  Collapse,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  InputGroup,
  InputGroupAddon,
  InputGroupText
} from "reactstrap";
import { TabContent, RowInfo, CollapseContainer } from "./Styled.js";
import { FormErrors } from "../../common/formErrors/FormErrors";
import axios from "axios";
import InformationContent from "./InformationContent";
export default class InformationTab extends Component {
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
      loaded: false,
      finishloaded: false,
      formErrors: { password: "", confirmpassword: "" },
      passwordValid: false,
      confirmpasswordValid: false,
      formValid: false
    };
    //this.handleUserInput = this.handleUserInput.bind(this);
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

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;
    let confirmpasswordValid = this.state.confirmpasswordValid;

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

      default:
        break;
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        passwordValid: passwordValid,
        confirmpasswordValid: confirmpasswordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.passwordValid && this.state.confirmpasswordValid
    });
    console.log(this.state.formValid);
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
        //alert("Contraseña cambiada");
        //window.location.reload(true);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <TabContent>
        <Row>
          <InformationContent
            name="Camilo Alejandro Sanchez Cruz"
            age="20"
            email="caasanchezcr@unal.edu.co"
            city="Bogota"
          />
        </Row>
        <Row>
          <RowInfo>
            <Button color="info" className="FullButton">
              Descargar mi perfil en PDF
            </Button>
          </RowInfo>
        </Row>
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
                  <Button type="submit" disabled={!this.state.formValid}>
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
                      <Input placeholder="username" />
                    </InputGroup>
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
                    <Input type="select" name="select" id="selectCity">
                      <option>Ciudad 1</option>
                      <option>Ciudad 2</option>
                      <option>Ciudad 3</option>
                      <option>Ciudad 4</option>
                      <option>Ciudad 5</option>
                    </Input>
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
              onClick={() => this.toggleAbout()}
              className="FullButton"
            >
              Actualiza tu estado
            </Button>
            <Collapse isOpen={this.state.collapseAbout}>
              <CollapseContainer>
                <Form>
                  <FormGroup>
                    <Label for="aboutText">Cuéntanos sobre ti</Label>
                    <Input type="textarea" name="about" id="aboutText" />
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
