import React, { Component } from 'react';

//Styles
import '../styles/fragmentcontainer.css'

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const divStyle = {
  color: 'blue'
};

class Reactions extends Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked_reaction: ''
    }

  }



  handleClick(props){
    
    console.log('clic');
  }
  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">
        <FontAwesomeIcon icon="smile" id= "smile" size ="3x" onClick = {this.handleClick}/> &nbsp;
        <FontAwesomeIcon icon="meh" id= "meh" size ="3x" onClick = {this.handleClick}/> &nbsp;
        <FontAwesomeIcon icon="frown" id= "frown" size ="3x" onClick = {this.handleClick}/>
        </div>
      </div>
    )
  }

}
export default Reactions;
