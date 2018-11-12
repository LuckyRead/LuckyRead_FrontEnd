//Dependencies
import React, { Component } from "react";

//Components
import Category from "./Category";
import Sub_topics from "./Sub_topics";
import "./homepage.css";

import axios from "axios";

class Categories_List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: [],
      subtopics: [],
      user: ""
    };
  }
  componentWillMount() {
    const token = localStorage.getItem("jwtToken");

    //get current user
    axios({
      method: "get",
      url: "https://luckyread-backend.herokuapp.com/api/users/current",
      headers: {
        Authorization: "Bearer " + token
      }
    })
      .then(response => {
        const user_r = response.data["current_user"];
        //get subtopics
        axios({
          method: "post",
          url:
            "https://luckyread-backend.herokuapp.com/api/users/preferences_sub_topic",
          headers: {
            Authorization: "Bearer " + token
          },
          data: {
            username: user_r
          }
        })
          .then(response => {
            const sub_topics = response["data"];
            this.setState({ subtopics: sub_topics });
            console.log(this.state.subtopics);
          })
          .catch(function(error) {
            console.log("error");
          });

        //get topics
        axios({
          method: "post",
          url:
            "https://luckyread-backend.herokuapp.com/api/users/preferences_topic",
          headers: {
            Authorization: "Bearer " + token
          },
          data: {
            username: user_r
          }
        })
          .then(response => {
            const topics = response.data;
            this.setState({ topics: topics });
            console.log(response);
          })
          .catch(function(error) {});
      })
      .catch(function(error) {
        console.log("error");
      });
  }

  handleClic = e => {
    const checked = e.target.checked;
    if (checked) {
    } else {
    }
  };

  render() {
    const domTopics = this.state.topics.map(topic => {
      return (
        <Category
          key={topic.topic_id}
          name={topic.topic_name}
          id={topic.topic_id}
        />
      );
    });
    const domSubTopics = this.state.subtopics.map(subtopic => {
      return (
        <Sub_topics
          key={subtopic.sub_topic_id}
          name={subtopic.sub_topic_name}
          id={subtopic.sub_topic_id}
        />
      );
    });
    return (
      <div>
        <br />
        <div className="row justify-content-center ">
          <h1>
            <strong>Mis preferencias</strong>
          </h1>
        </div>
        <div className="row justify-content-center ">
          <ul className="list-group">{domTopics}</ul>
        </div>
        <div className="row justify-content-center ">
          <h2>
            <strong>Subcategorías</strong>
          </h2>
        </div>
        <div className="row justify-content-center ">
          <ul className="list-group">{domSubTopics}</ul>
        </div>
      </div>
    );
  }
}

export default Categories_List;

/*
<div>
      <br/>
      <h1>Mis preferencias</h1>
      <div onClick={this.handleClic}>{domTopics}</div>
</div>

const config = {
  headers: {'Authorization': "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzk3NjA4MDEsInN1YiI6MTgzfQ.QhIW5m1xG_IXdpniQ9AQi2xobxJs3G7adV_dcFhlwsw"}
};

const bodyParameters = {
  username: "lauram"
}


axios.post( 'http://localhost:3000/api/users/preferences_topic', { bodyParameters }, { config })
  .then((response) => {
      const topics = response.data;
      this.setState({ topics });
      console.log(response)
  }).catch((error) => {
      console.log(error)
  });


state ={
  topics: [
    {id: '1', name: 'Historia'},
    {id: '2', name: 'Ciencia'},
    {id: '3', name: 'Tema 3'},
    {id: '4', name: 'Misterio'},
    {id: '5', name: 'Biografias'},
    {id: '6', name: 'Emprendimiento'},
  ]
}

addTopic = (topic) => {
 topic.id = Math.random();
 let topics = [...this.state.topics, topic];
 this.setState({
   topics: topics
 });
}

deleteTopic = (id) => {
 let topics = this.state.topics.filter(topic => {
   return topic.id !== id
 });
 this.setState({
   topics: topics
 });
}

componentDidMount(){
 console.log('component mounted');
}
componentDidUpdate(prevProps, prevState, snapshot){
 console.log('component updated');
 console.log(prevProps, prevState);
}

render(){
  return(
<div className="row">
  <div className="col-sm-12" id="Categories_List">
    <HomePage_Category deleteTopic={this.deleteTopic} topics={this.state.topics}/>
  <AddTopic addTopic={this.addTopic} />
    </div>
    </div>
  )
}
*/
