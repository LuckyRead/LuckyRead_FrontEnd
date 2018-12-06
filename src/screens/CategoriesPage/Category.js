import React, { Component } from "react";
import { Collapse, Card, Button, CardHeader, CardBody,
CardText} from 'reactstrap';
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
      check: this.props.love
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

    ////mirar si le gusta o no el topico al usuario
    //console.log('componentWillMount')
    // axios({
    //   method: "get",
    //   url:
    //     "https://luckyread-backend.herokuapp.com/api/users/preference/topic/"+this.props.id,
    //   headers: {
    //     Authorization: "Bearer " + localStorage.jwtToken
    //   }
    //
    // }).then( res =>{
    //   //console.log(res)
    //   if(res['data']['msj'] === "Topic does like to user"){
    //     this.setState({
    //       check: true
    //     })
    //   }else{
    //     this.setState({
    //       check: false
    //     })
    //     //console.log(res)
    //   }
    // })
    // //get subtopics
    // axios({
    //   method: "get",
    //   url:
    //     "https://luckyread-backend.herokuapp.com/api/sub_topic/"+this.props.id,
    // })
    //   .then(response => {
    //     const sub_topics = response["data"];
    //     //console.log(response);
    //     this.setState({ subtopics: sub_topics });
    //   })
    //   .catch(function(error) {
    //     console.log("error");
    //   });


  handleClick = (e) => {
    const checked = e.target.checked
    console.log('topico checked')
    console.log(checked)
    if(checked === true){
      //console.log('checked')
      this.setState({
        check: true
      })
      axios({
        method: "post",
        url:
          "https://luckyread-backend.herokuapp.com/api/topic/add_pref/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      }).then(response =>{
        console.log(response)
      })
    }else{
      //console.log('not checked')
      this.setState({
        check: false
      })
      axios({
        method: "delete",
        url:
          "https://luckyread-backend.herokuapp.com/api/topic/rm_pref/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      }).then(response => {
        console.log(response)
      })
    }

  }

  render() {
    console.log('subtopicos del topico' + this.props.id)
    console.log(this.props.subtopics)
    //console.log('render topic: ' + this.props.id)
    //console.log(this.state.subtopics)
    const domSubTopics = this.props.subtopics.map(subtopic => {
      return (
        <Sub_topics
          key={subtopic.id}
          name={subtopic.sub_topic_name}
          id={subtopic.id}
          checked = {this.state.check}
          love = {subtopic.love}
        />
      );
    });

    //const collapse = this.state.subtopics ? () :
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
              <CardText>
                 {domSubTopics}
              </CardText>
            </CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default Category;
