import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import {
  PageContainer,
  MessageFragment,
  FragmentContent,
  ImageContainer,
  FragmentTitle,
  FragmentText,
  StatisticsContainer,
  TagsContainer,
  Topics
} from "./Styled";
import pdficon from "../../resources/paper_plane.png";
import RandomFragment from "../RandomFragmentPage/RandomFragment";
import axios from "axios";
import Loading from "../../common/Loading/Loading";
import CategoryTag from "../../common/Tags/CategoryTag";
import CommentMap from "../../common/Comment/CommentMap";

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
        console.log("el error es pidiendo fragmento random");
      }
    );
    return;
  };


  render() {
    console.log(rf);
    console.log("aqui");
    console.log("id");
    console.log(this.state.randomfragment.id);
    console.log(this.state.topics[0]);
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
