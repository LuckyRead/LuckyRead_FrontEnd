//Dependencies
import React, { Component } from "react";

//Components
import Category from "./Category";

import { ListGroup, ListGroupItem, Button, TabContent } from "reactstrap";
import "./preferences.css";
import { ContainerS } from "./Styled";
import axios from "axios";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentWillMount() {
    axios({
      method: "get",
      url: "https://luckyread-backend.herokuapp.com/api/topics/get_all_in_one",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwtToken")
      }
    })
      .then(response => {
        console.log("ALL IN ONE");
        console.log(response);
        this.setState({
          topics: response.data.topics
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    console.log("PREFERENCES");
    const domTopics = this.state.topics.map(topic => {
      return (
        <Category
          key={topic.id}
          name={topic.topic_name}
          id={topic.id}
          subtopics={topic.sub_topics}
          love={topic.loveTopic}
        />
      );
    });
    return (
      <ContainerS>
        <div className="container">
          <div className="row justify-content-center " id="mypreferences">
            <ListGroup>{domTopics}</ListGroup>
          </div>
        </div>
      </ContainerS>
    );
  }
}

export default Preferences;
