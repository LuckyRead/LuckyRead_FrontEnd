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
      {id: '3', name: 'Misterio'},
      {id: '3', name: 'Biografias'},
      {id: '3', name: 'Emprendimiento'},
    ]
  }

 addTopic = (topic) => {
   topic.id = Math.random();
   let topics = [...this.state.topics, topic];
   this.setState({
     topics: topics
   });
 }

  render(){
    return(
  <div className="row">
    <div className="col-sm-12" id="HomePage_Categories_List">
      <HomePage_Category topics={this.state.topics}/>
    <AddTopic addTopic={this.addTopic} />
      </div>
      </div>
    )
  }

}

export default HomePage_Categories_List
