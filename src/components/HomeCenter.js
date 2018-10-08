//Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

//Components
//styles
import '../styles/home.css';

//Data
//import items from '../data/menu.js'
import HomeCategories from './HomeCategories';
import HomeFragment from './HomeFragment';
import HomeCommunity from './HomeCommunity';


class HomeCenter extends Component {

  constructor() {
    super();
  }

  render(){
    return(
    <div className="row" >
    <div className="col-md-4" id="Categories">
    <HomeCategories/>
    
      </div>
    <div className="col-md-4" id="Categories">
    <HomeFragment/>  
      </div>
    <div className="col-md-4" id="Categories">
    <HomeCommunity/>     
      </div>
      </div>
    )
  }

}

export default HomeCenter
