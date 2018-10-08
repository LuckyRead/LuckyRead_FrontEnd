//Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

//Components
import Navigation from './Navigation';
import InitCenter from './InitCenter';
//styles
import '../styles/init.css';

//Data
//import items from '../data/menu.js'



import logo from '../resources/white_logo_luckyread.png';



class Init extends Component {

  constructor() {
    super();
  }

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
