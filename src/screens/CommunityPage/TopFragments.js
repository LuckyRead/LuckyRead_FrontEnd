import React, { PureComponent } from "react";
import { CardDeck } from "reactstrap";
import CardTop from "./Card";
import { TabContent } from "./Styled";
import "./community.css";

import axios from "axios";

export default class TopFragments extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fragments: []
    };
  }

  componentWillMount() {
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/fragments/stat/five_fragments_more_percentage_likes"
    })
      .then(response => {
        console.log("FRAGMENTOS");
        console.log(response);
        this.setState({
          fragments: response.data
        });
      })
      .catch(function(error) {});
  }

  render() {
    const domFragments = this.state.fragments.map(fragment => {
      return (
        <CardTop
          key={fragment.Fragment.id}
          title={fragment.Fragment.title}
          introduction={fragment.Fragment.introduction}
          image={fragment.Fragment.base64_image}
          id={fragment.Fragment.id}
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
