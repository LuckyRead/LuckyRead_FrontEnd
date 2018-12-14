import React, { Component } from "react";
import API from "../../api";
import Topic from "./Topic";
import dark from "../../resources/dark.jpeg";
import { Button, Row, Col } from "reactstrap";
import { TopicsContainer, NextButton, Title } from "./Styled";
import { Link } from "react-router-dom";
import Loading from "../../common/Loading/Loading";

export default class CategoriesInitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: [],
      topics: null,
      topicscards: []
    };
    this.selectTopic = this.selectTopic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    API.get("/api/topic/alltopics").then(res => {
      console.log(res.data);
      this.setState({
        topics: res.data
      });

      console.log("topicos recibidos", res.data);
      const allTopics = [];
      this.state.topics.forEach(item => {
        allTopics.push(false);
      });

      this.setState(
        {
          selectedTopics: allTopics
        },
        () => console.log(this.state)
      );
    });
  }

  selectTopic(topicid, selected) {
    console.log("heeyyy topico ", topicid, selected);
    const index = topicid - 1;
    const select = this.state.selectedTopics;
    select[index] = selected;
    this.setState({
      selectedTopics: select
    });
  }

  handleSubmit() {
    const preferencesids = [];
    this.state.selectedTopics.forEach((item, index) => {
      if (this.state.selectedTopics[index]) {
        const topicid = index + 1;
        preferencesids.push(topicid);
      }
    });
    localStorage.setItem("preferences", preferencesids);
    console.log(localStorage);
  }
  // localStorage.setItem("jwtToken", token);

  renderTopics() {
    console.log("en render topics");

    const topicsList = this.state.topics.map((item, index) => (
      <Topic
        key={index}
        topicname={item.topic_name}
        topicid={item.id}
        topicimage={"data:image/png;base64, " + item["topic_image"]}
        selectTopic={this.selectTopic}
      />
    ));
    return topicsList;
  }

  render() {
    console.log("preferences", localStorage.preferences)
    const topics = this.state.topics ? (
      <div>
        <Row>
          <Title>
            <Col>Quiero leer algo de:</Col>
          </Title>
        </Row>
        <Row>
          <Col>
            <TopicsContainer>{this.renderTopics()}</TopicsContainer>
          </Col>
        </Row>
        <Row>
          <NextButton>
            <Col>
              <Link to={"/something"}>
                <Button color="success" onClick={this.handleSubmit}>
                  Siguiente
                </Button>{" "}
              </Link>
            </Col>
          </NextButton>
        </Row>
      </div>
    ) : (
        <Loading />
      );
    return <div>{topics}</div>;
  }
}
