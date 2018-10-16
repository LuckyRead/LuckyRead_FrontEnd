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
        topics : []
    };
  }

  componentWillMount(){
        axios({
            method:'post',
            url: 'http://localhost:3000/api/users/preferences_topic',
            headers: {
              'Authorization': "Bearer "+ "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzk3NjA4MDEsInN1YiI6MTgzfQ.QhIW5m1xG_IXdpniQ9AQi2xobxJs3G7adV_dcFhlwsw"
            },
            data: {
              username: 'lauram'
            },
        }).then(response => {
            const topics = response.data;
            this.setState({ topics: topics });
        })
        .catch(function (error) {
        });
  }

  /*addTopic() {
    console.log('entro aquí');
  }*/


  handleClic = (e) => {
    const checked = e.target.checked
    if (checked){

    }else{

    }
  }

  render(){
    console.log(this.state.topics)
    var topics2 = this.state.topics.topics;
    console.log(topics2);
    console.log(topics2[0]);
    /*const domTopics = topics2.map(topic => {
        return <Category topic_id={topic.topic_id} topic_name={topic.topic_name}/>;
    });*/
    return(
      <div>
            <div onClick={this.handleClic}>Hola</div>
      </div>

    );
  }

}

export default Categories_List

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

/*const config = {
  headers: {'Authorization': "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzk3NjA4MDEsInN1YiI6MTgzfQ.QhIW5m1xG_IXdpniQ9AQi2xobxJs3G7adV_dcFhlwsw"}
};

const bodyParameters = {
  username: "lauram"
}*/


/*axios.post( 'http://localhost:3000/api/users/preferences_topic', { bodyParameters }, { config })
  .then((response) => {
      const topics = response.data;
      this.setState({ topics });
      console.log(response)
  }).catch((error) => {
      console.log(error)
  });*/

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
