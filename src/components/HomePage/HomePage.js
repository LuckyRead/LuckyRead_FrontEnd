//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from '../Navigation';
import HomeCenter from './HomeCenter';
//styles
import '../../styles/home.css';

//Data
//import items from '../data/menu.js'




class HomePage extends Component {


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

export default HomePage
