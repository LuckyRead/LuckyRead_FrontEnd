import React, { Component } from 'react';
import Navigation from './Navigation';
import Preferences from './Preferences';

class CategoriesPage extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="CategoriesPage">
        <Navigation/>
        <Preferences name = "Arte"/>
        <br/>
        <Preferences name = "Ciencia"/>
        <br/>
      </div>
    )
  }

}

export default CategoriesPage
