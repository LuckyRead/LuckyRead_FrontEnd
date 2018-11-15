import React, { Component } from "react";
import { Row, Col, Collapse, Button } from "reactstrap";
import { TabContent, RowInfo } from "./Styled.js";

export default class InformationTab extends Component {
  constructor(props) {
    super(props);
    this.togglePassword = this.togglePassword.bind(this);
    this.state = { collapsePassword: false };
  }
  togglePassword() {
    let newState = Object.assign({}, this.state);
    newState.collapsePassword = !newState.collapsePassword;
    this.setState(newState);
    console.log(this.state);
  }
  render() {
    return (
      <TabContent>
        <Row>
          <h5 style={{ textAlign: "center", margin: "auto" }}>
            Aca va a ir el componente de datos del perfil
          </h5>
        </Row>
        <Row>
          <RowInfo>
            <Button
              color="primary"
              onClick={() => this.togglePassword()}
              className="FullButton"
            >
              Cambiar contrasena
            </Button>
            <Collapse isOpen={this.state.collapsePassword}>
              <h5>Aca va el formulario</h5>
            </Collapse>
          </RowInfo>
        </Row>
      </TabContent>
    );
  }
}
