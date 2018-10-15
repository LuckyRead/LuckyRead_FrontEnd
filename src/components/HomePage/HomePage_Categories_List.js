//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from '../Navigation';
import HomeCenter from './HomeCenter';
import HomePage_Categorie from './HomePage_Categorie';
//styles
import '../../styles/homepage.css';

//Data

class HomePage_Categories_List extends Component {

  state ={
    categories: [
      {id: '1', name: 'Historia'},
      {id: '2', name: 'Ciencia'},
      {id: '3', name: 'Tema 3'},
      {id: '3', name: 'Misterio'},
      {id: '3', name: 'Biografias'},
      {id: '3', name: 'Emprendimiento'},
    ]

  }

  render(){
    return(
  <div className="row">
    <div className="col-sm-12" id="HomePage_Categories_List">
      <HomePage_Categorie categories={this.state.categories}/>
      </div>
      </div>
    )
  }

}

export default HomePage_Categories_List