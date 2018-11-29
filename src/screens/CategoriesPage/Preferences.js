//Dependencies
import React, { Component } from "react";

//Components
import Category from "./Category";

import { ListGroup, ListGroupItem, Button, TabContent} from 'reactstrap';
import "./homepage.css";

import axios from "axios";

class Preferences extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: []
    };
  }

  componentWillMount() {
    const token = localStorage.getItem("jwtToken");
    const user = localStorage.getItem("user");

    //get topics
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/topic/alltopics",
    }).then(response => {
        const topics = response.data;
        this.setState({ topics: topics });
        console.log(response);
    })
  }

  render(){
    const domTopics = this.state.topics.map(topic => {
      return (
        <Category
          key={topic.id}
          name={topic.topic_name}
          id={topic.id}
        />
      );
    });
    return (
      <div className="container" id="preferences">
        <div className="row justify-content-center ">
          <h1>
            <strong>Mis preferencias</strong>
          </h1>
        </div>
        <div className="row justify-content-center ">
          <ListGroup>{domTopics}</ListGroup>
        </div>
      </div>
    )
  }

}

export default Preferences;
