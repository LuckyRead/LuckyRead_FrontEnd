import React, { Component } from "react";
import { Collapse, Card, Button, CardHeader, CardBody,
 CardTex} from 'reactstrap';
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
      check: false
    };
  }

  toggle() {
    let checked = this.state.check
    if(checked === true){
      //console.log('true')
      this.setState({ collapse: !this.state.collapse });
    }else{
      this.setState({ collapse: false });
      //console.log('false')
    }
  }

  componentWillMount() {
    ////mirar si le gusta o no el topico al usuario
    //console.log('componentWillMount')
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/users/preference/topic/"+this.props.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }

    }).then( res =>{
      //console.log(res)
      if(res['data']['msj'] === "Topic does like to user"){
        this.setState({
          check: true
        })
      }else{
        this.setState({
          check: false
        })
        //console.log(res)
      }
    })
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
        axios({
          method: "get",
          url:
            "https://luckyread-backend.herokuapp.com/api/sub_topic/"+this.props.id,
        }).then(response => {
          const newsub_topics = response["data"];
          console.log(response);
          this.setState({ subtopics: newsub_topics });
        })
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
    console.log('render topic: ' + this.props.id)
    //console.log(this.state.subtopics)
    const domSubTopics = this.state.subtopics.map(subtopic => {
      return (
        <Sub_topics
          key={subtopic.id}
          name={subtopic.sub_topic_name}
          id={subtopic.id}
          checked = {this.state.check}
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
                 {domSubTopics}
            </CardBody>
        </Collapse>
      </Card>
    );
  }
}

export default Category;
