import React, { Component } from "react";

import "./fragmentcontainer.css";
import API from "../../api";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import ReactionButtons from "../../common/LikesPercentageStatistics/ReactionButtons";
import CategoryTag from "../../common/Tags/CategoryTag";
import CommentMap from "../../common/Comment/CommentMap";
import Fragment from "../../screens/FragmentPage/Fragment";

import {
  Left,
  Right,
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  FragmentButtons,
  CategoryTagContainer,
  Topics,
  TopicsText,
  TopicsRow
} from "./Styled";

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
    const statistic = this.state.statistic;
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
      <Loading/>
    );

    return <div>{fragment}</div>;
  }
}

export default FragmentPage;
