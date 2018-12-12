import React, { Component } from "react";
import Spinner from "react-spinkit";
import {
  Row,
  Col
} from "reactstrap";
import { TabContent} from "./Styled.js";
import { FormErrors } from "../../common/formErrors/FormErrors";
import axios from "axios";
import InformationContent from "./InformationContent";
export default class InformationTab extends Component {
  constructor(props) {
    super(props);

  }

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
