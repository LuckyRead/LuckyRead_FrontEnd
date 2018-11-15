import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { TabContent } from "./Styled.js";

export default class InformationTab extends Component {
  render() {
    return (
      <TabContent>
        <Row>
          <h5 style={{ textAlign: "center", margin: "auto" }}>
            Aca va a ir el componente de datos del perfil
          </h5>
        </Row>
      </TabContent>
    );
  }
}
