//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from '../Navigation';
import HomeCenter from './HomeCenter';
//styles
import '../../styles/home.css';

//Data

class HomePage_Categorie extends Component {


  render(){

    const{categories}=this.props;
    const categorieList = categories.map (categorie => {
      return(
        <div className="HomePage_Categorie">
        <div className="row">
          <div className="col-sm-12" >
          <div>{categorie.name}</div>
          </div>
          </div>
          </div>
      )
    })
    return(
      <div className="categorie-list">
        {categorieList}
      </div>

    )
  }

}

export default HomePage_Categorie
