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

export default class FollowersTab extends Component {
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
          username: "gdgarcia1235",
          name: "German",
          lastname: "Garcia",
          profile_photo: "asdasd",
          followed: false
        },
        {
          username: "salcq2135",
          name: "Samael",
          lastname: "Sacedo",
          profile_photo: "asdasd",
          followed: false
        },
        {
          username: "lm2315",
          name: "Laura",
          lastname: "Molina",
          profile_photo: "asdasd",
          followed: true
        },
        {
          username: "shinkansen1239",
          name: "Sebastian",
          lastname: "Becerra",
          profile_photo: "asdasd",
          followed: false
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
