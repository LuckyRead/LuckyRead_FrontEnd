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
          username: "Camilo",
          nickname: "camiela2121",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Daniela",
          nickname: "danicastel2829",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Camiela",
          nickname: "cd2121",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Cristhian",
          nickname: "cc2951",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Laura",
          nickname: "lm2987",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Lauristian",
          nickname: "lc2929",
          photosrc: "asdasd",
          followed: true
        },
        {
          username: "Daniel",
          nickname: "descob",
          photosrc: "asdasd",
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
