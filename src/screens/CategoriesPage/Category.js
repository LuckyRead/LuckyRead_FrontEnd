import React, { Component } from "react";
import { ListGroup, ListGroupItem, Collapse, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col } from 'reactstrap';
import Sub_topics from "./Sub_topics";
import axios from 'axios';

import "./preferences.css";

//Icons

class Category extends Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      subtopics: []
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  componentWillMount() {
    //get subtopics
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/sub_topic/"+this.props.id,
    })
      .then(response => {
        const sub_topics = response["data"];
        //console.log(response);
        this.setState({ subtopics: sub_topics });
      })
      .catch(function(error) {
        console.log("error");
      });

  }


  render() {
    const domSubTopics = this.state.subtopics.map(subtopic => {
      return (
        <Sub_topics
          key={subtopic.id}
          name={subtopic.sub_topic_name}
          id={subtopic.id}
        />
      );
    });
    return (
      <Card className= "Item">
        <CardHeader id="Header">
          <Button color="link" onClick={this.toggle}>{this.props.name}</Button>
        </CardHeader>
        <Collapse isOpen={this.state.collapse}>
            <CardBody>
            {domSubTopics}
            </CardBody>
        </Collapse>
      </Card>

      /*<div key={this.props.topic_id}>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={this.props.id} onClick={this.showSubCategories}/>
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.name}</label>
        </div>
      </div>*/
    );
  }
}

export default Category;
