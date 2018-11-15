import React, { Component } from "react";
import PopUp from "./PopUp";
import axios from "axios";
import { Row, Col } from "reactstrap";

export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //posts: [],
      path: null,
      base_64_image: null,
      user_data: ""
    };
  }

  render() {
    return (
      <div>
        <h1>Probando probando</h1>
      </div>
    );
  }
}
