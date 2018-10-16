//Dependencies
import React, { Component } from 'react';

//Components
import HomePage_Category from './HomePage_Category';
import AddTopic from './AddTopic';
import Category from './Category';
//styles
import '../../styles/homepage.css';

import axios from 'axios';

class Categories_List extends Component {

  constructor(props){
    super(props);
    this.state = {
        topics : [],
        preferences: []
    };
  }

  componentWillMount(){
        /*axios({
            method:'get',
            url:'https://jsonplaceholder.typicode.com/posts',
        })
        .then(response => {
            const topics = response.data;
            this.setState({ topics });
        })
        .catch(function (error) {
        });*/

        var config = {
          headers: {'Authorization': "Bearer " + token}
         };

        axios.post(
            'http://localhost:3000/api/users/preferences_topic',
            config
        ).then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error)
        });

  }

  addTopic() {
    console.log('entro aquí');
  }


  handleClic = (e) => {
    const checked = e.target.checked
    if (checked){
        addTopic
    }else{

    }
  }
  render(){
    const domTopics = this.state.topics.map(topic => {
            return <Category id={topic.id} title={topic.title}/>;
    });
    return(
      <div>
            <div onClick={this.handleClic}>{domTopics}</div>
      </div>

    );
  }

}

export default Categories_List


/*
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
