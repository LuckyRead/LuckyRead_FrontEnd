import React, { Component } from "react";
import { Row } from "reactstrap";
import { TabContent } from "./Styled.js";
import InformationContent from "./InformationContent";
export default class InformationTab extends Component {
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
      </TabContent>
    );
  }
}
