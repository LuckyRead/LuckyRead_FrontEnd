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
import axios from 'axios';

export default class FollowersTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentWillMount(){
    // axios({
    //   method: "get",
    //   url:
    //     "https://luckyread-backend.herokuapp.com/api/followed",
    //   headers: {
    //     Authorization: "Bearer " + localStorage.jwtToken
    //   }
    // }).then(response => {
    //   console.log('api/followed')
    //   console.log(response)
    //   this.setState({
    //     response: response.data.users
    //   })
    // })
  }

  render() {
    return (
      <TabContent>
        <div style={{ width: "400px", margin: "auto" }} className="test">
          <ProfileLabelMap response={this.state.response} />
        </div>
      </TabContent>
    );
  }
}
