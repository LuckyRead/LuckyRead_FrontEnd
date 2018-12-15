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
      randomTopic: 0
    };
    this.request = this.request.bind(this);
  }

  componentDidMount() {
    this.request();
  }

  request = e => {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragments/something/2",
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
        />
      </PageContainer>
    ) : (
      <div className="center">Cargando</div>
    );
    return <div>{rf}</div>;
  }
}

export default RandomFragmentPage;
