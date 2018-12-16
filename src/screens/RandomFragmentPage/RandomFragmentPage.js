import React from "react";

import { PageContainer } from "./Styled";
import RandomFragment from "../RandomFragmentPage/RandomFragment";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
import NonFragmentPopUp from "../../common/PopUps/NonFragmentPopUp"
class RandomFragmentPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomfragment: [],
      topics: [],
      randomTopic: 0,
      // 0 de los dos, 1 usuarios, 2 lucky read
      mode: this.setMode(),
      fragmentValid: false,
      popUp: true,
    };
    this.request = this.request.bind(this);
    this.popUptoggle = this.popUptoggle.bind(this);
    this.modifyRFType = this.modifyRFType.bind(this);
  }


  popUptoggle() {
    this.setState({
      showpopup: !this.state.showpopup
    });
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
    this.setState({
      fragmentValid: false
    });
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragments/something/" + this.state.mode,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log("responde", response);

        if (response.data.error === "Can't show any fragments writed by user with your preferences") {
          console.log("Fragmento no valido")
          this.popUptoggle();
          this.setState({
            mode: 2,
            fragmentValid: false
          });
        } else {

          this.setState({
            randomfragment: response["data"],
            topics: response["data"].topics,
            fragmentValid: true
          });
          console.log("randomfragment");
          console.log(this.state.randomfragment);
        }
      },
      err => {
        console.log("Error solicitando fragmento random");
      }
    );
    return;
  };

  render() {
    console.log(this.state.randomfragment)
    const rf = this.state.randomfragment && this.state.fragmentValid ? (
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
        <div>
          <Loading />
          {this.state.showpopup ? (
            <NonFragmentPopUp popUptoggle={this.popUptoggle} modal={true} request={this.request} />
          ) : null}
        </div>

      );
    return <div>{rf}</div>;
  }
}

export default RandomFragmentPage;
