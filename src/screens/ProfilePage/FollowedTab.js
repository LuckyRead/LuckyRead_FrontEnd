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
    this.togglePassword = this.togglePassword.bind(this);
    this.state = {
      response: [
        {
          username: "Camilo",
          nickname: "camiela2121",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Daniela",
          nickname: "danicastel2829",
          photosrc: "asdasd",
          followed: false
        },
        {
          username: "Camiela",
          nickname: "cd2121",
          photosrc: "asdasd",
          followed: true
        }
      ]
    };
  }

  render() {
    return (
      <TabContent>
        <div style={{ width: "300px" }}>
          <ProfileLabelMap response={this.state.response} />
        </div>
      </TabContent>
    );
  }
}
