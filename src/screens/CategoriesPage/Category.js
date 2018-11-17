import React, { Component } from "react";
import { ListGroup, ListGroupItem, Collapse, Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, Col, Input, Label } from 'reactstrap';
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
      subtopics: [],
      check: true
    };
  }

  toggle() {
    let checked = this.state.check
    if(checked === true){
      this.setState({ collapse: !this.state.collapse });
    }else{
      this.setState({ collapse: false });
    }

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

  handleClick = (e) => {
    const checked = e.target.checked
    if(checked === true){
      this.setState({ check: true });
    }else{
      this.setState({ check: false });
    }

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
          <div className="pretty p-switch p-fill">
            {this.state.check ?
               (<input type="checkbox" id="checkCategory" defaultChecked onClick = {this.handleClick}/>)
              :(<input type="checkbox" id="checkCategory" onClick = {this.handleClick}/>)
            }
              <div className="state  p-info">
                  <label></label>
              </div>
           </div>
           <Button color="link" id ="Category"onClick={this.toggle}>
             {this.props.name}
           </Button>


        </CardHeader>
        <Collapse isOpen={this.state.collapse} id="Collapse">
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
