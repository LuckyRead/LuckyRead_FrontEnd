import React, { Component } from "react";
import API from "../../api";
import Topic from "./Topic";
import { Row, Col } from "reactstrap";
import { TopicsContainer } from "../CategoriesInitPage/Styled";

export default class TopicsFragmentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTopics: [],
      topics: [],
      topicscards: []
    };
    this.selectTopic = this.selectTopic.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    API.get("/api/topic/alltopics").then(res => {

      this.setState({
        topics: res.data
      });


      const allTopics = [];
      this.state.topics.forEach(item => {
        allTopics.push(false);
      });

      this.setState(
        {
          selectedTopics: allTopics
        }
      );
    });
  }

  selectTopic(topicid, selected) {
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

  }
  // localStorage.setItem("jwtToken", token);

  renderTopics() {

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
    const topics = this.state.topics ? (
      <div>
        <Row>
          <Col>
            <TopicsContainer>{this.renderTopics()}</TopicsContainer>
          </Col>
        </Row>
      </div>
    ) : (
        <div>Cargando</div>
      );
    return <div>{topics}</div>;
  }
}
