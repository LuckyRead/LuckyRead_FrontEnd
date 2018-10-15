//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from '../Navigation';
import HomeCenter from './HomeCenter';
import HomePage_Category from './HomePage_Category';
import AddTopic from './AddTopic';
//styles
import '../../styles/homepage.css';

//Data

class HomePage_Categories_List extends Component {

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

  render(){
    return(
  <div className="row">
    <div className="col-sm-12" id="HomePage_Categories_List">
      <HomePage_Category deleteTopic={this.deleteTopic} topics={this.state.topics}/>
    <AddTopic addTopic={this.addTopic} />
      </div>
      </div>
    )
  }

}

export default HomePage_Categories_List
