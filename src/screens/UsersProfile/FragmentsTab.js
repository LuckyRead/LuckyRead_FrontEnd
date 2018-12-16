import React, { Component } from "react";
import { Row } from "reactstrap";
import { TabContent } from "./Styled.js";
import axios from 'axios';
import { CardDeck } from "reactstrap";
import CardTop from "../CommunityPage/Card";

export default class FragmentsTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fragments: []
    };
  }

  componentWillMount(){
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/user/my_fragments/" + this.props.username,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(response => {
        console.log("MIS FRAGMENTOS")
        console.log(response);
        this.setState({
          fragments: response.data.fragments
        });

      })
      .catch(function (error) {
        console.log("error al pedir fragmentos");
      });
  }

  render() {
    const domFragments = this.state.fragments.map(fragment => {
      return (
        <CardTop
          key={fragment.id}
          title={fragment.title}
          introduction={fragment.introduction}
          image={fragment.base64_image}
          id={fragment.id}
        />
      );
    });
    return (
      <TabContent>
        <br />
        <CardDeck>{domFragments}</CardDeck>
      </TabContent>
    );
  }
}
