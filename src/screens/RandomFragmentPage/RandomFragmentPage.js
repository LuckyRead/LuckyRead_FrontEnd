import React from "react";

import { PageContainer } from "./Styled";
import RandomFragment from "../RandomFragmentPage/RandomFragment";
import axios from "axios";

class RandomFragmentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: [],
      topics: [],
      randomTopic: 0,
      // 0 de los dos, 1 usuarios, 2 lucky read
      mode: this.setMode()
    };
    this.request = this.request.bind(this);
    this.modifyRFType = this.modifyRFType.bind(this);
  }
  setMode() {
    if (localStorage.getItem("randomfragmenttype") === null) {
      return 0;
    } else {
      return parseInt(localStorage.getItem("randomfragmenttype"));
    }
  }

  componentDidMount() {
    this.request();
  }

  modifyRFType(number) {
    localStorage.setItem("randomfragmenttype", number);
    this.setState({ mode: number }, () => this.request());

  }

  request = e => {
    console.log(localStorage.jwtToken);
    const requesturl = "https://luckyread-backend.herokuapp.com/api/fragments/something/" + this.state.mode
    console.log(requesturl)
    axios({
      method: "GET",
      url: ("https://luckyread-backend.herokuapp.com/api/fragments/something/" + this.state.mode),
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log(response);
        this.setState({
          randomfragment: response["data"],
          topics: response["data"].topics
        });
        console.log("randomfragment");

        console.log(this.state.randomfragment);
      },
      err => {
        console.log("Error solicitando fragmento random");
      }
    );
    return;
  };

  render() {
    const rf = this.state.randomfragment ? (
      <PageContainer>
        <RandomFragment
          randomfragment={this.state.randomfragment}
          topicsArray={this.state.topics}
          request={this.request}
          mode={this.state.mode}
          modifyMode={this.modifyRFType}
        />
      </PageContainer>
    ) : (
        <div className="center">Cargando</div>
      );
    return <div>{rf}</div>;
  }
}

export default RandomFragmentPage;
