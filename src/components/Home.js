//Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

//Components
import Navigation from './Navigation';
import HomeCenter from './HomeCenter';
//styles
import '../styles/home.css';

//Data
//import items from '../data/menu.js'



import logo from '../resources/white_logo_luckyread.png';



class Home extends Component {

  constructor() {
    super();
  }

  render(){
    return(
  <div className="Home">
  <Navigation/>
        <div className="col-sm-12" id="HomeCenter">
        <HomeCenter />
      </div>
      </div>
    )
  }

}

export default Home
