import React, { Component } from "react";

import { TabContent } from "./Styled.js";
import ProfileLabelMap from "../../common/ProfileLabel/ProfileLabelMap";
import axios from 'axios';

export default class FollowersTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentWillMount() {

    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/followed",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(response => {

      this.setState({
        response: response.data.users
      })
    })
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
