import React, { Component } from "react";

import API from "../../api";
import Loading from "../../common/Loading/Loading";

import Fragment from "../../screens/FragmentPage/Fragment";

import { PageContainer } from "./Styled";

class FragmentPage extends Component {
  state = {
    fragment: null,
    statistic: null,
    topics: {}
  };

  componentDidMount() {
    console.log("component did mount");
    let id = this.props.match.params.fragment_id;
    console.log(id);
    API.get("/api/fragments/" + id).then(
      res => {
        this.setState(
          {
            fragment: res["data"][1],
            topics: res["data"][1]["topics"],
            statistic: res["data"][0]
          },
          () => {
            console.log("Request done");
            console.log(this.state.statistic);
          }
        );
      },
      err => {
        console.log("error");
      }
    );
  }

  render() {
    const fragment = this.state.fragment ? (
      <PageContainer>
        <Fragment
          fragment={this.state.fragment}
          topics={this.state.topics}
          request={this.request}
          statistic={this.state.statistic}
        />

      </PageContainer>
    ) : (
      <Loading />
    );

    return <div>{fragment}</div>;
  }
}

export default FragmentPage;
