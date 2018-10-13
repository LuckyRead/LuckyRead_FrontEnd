//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from './Navigation';
import InitCenter from './InitCenter';
//styles
import '../styles/init.css';

//Data
//import items from '../data/menu.js'



class Init extends Component {

  render(){
    return(
  <div className="Init">
    <Navigation/>
  <InitCenter/>
      </div>
    )
  }

}

export default Init
