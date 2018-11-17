import React, { Component } from "react";
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
import ProfileLabelMap from "../../common/ProfileLabel/ProfileLabelMap";

export default class FollowedTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [
        {
          username: "camiela2121",
          name: "Camilo",
          lastname: "Sanchez",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "danicastel2829",
          name: "Daniela",
          lastname: "Castellanos",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "camiela2121",
          name: "Camiela",
          lastname: "Castesanchez",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "cc2951",
          name: "Cristhian",
          lastname: "Contreras",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "lm2315",
          name: "Laura",
          lastname: "Molina",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "laurist6123",
          name: "Lauristian",
          lastname: "Montreras",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "daescobp2135",
          name: "Daniel",
          lastname: "Escobar",
          profile_photo: "asdasd",
          followed: true
        }
      ]
    };
  }

  render() {
    return (
      <TabContent>
        <div style={{ width: "400px", margin: "auto" }}>
          <ProfileLabelMap response={this.state.response} />
        </div>
      </TabContent>
    );
  }
}
