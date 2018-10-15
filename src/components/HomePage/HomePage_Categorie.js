//Dependencies
import React, { Component } from 'react';

//Components
import Navigation from '../Navigation';
import HomeCenter from './HomeCenter';
//styles
import '../../styles/homepage.css';

//Data

class HomePage_Categorie extends Component {

  handleClick = (e) => {
    console.log('holi');
  }

  handleMouseOver= (e) => {


  }

  render(){

    const{categories}=this.props;
    const categorieList = categories.map (categorie => {
      return(
        <div className="categorie">
        <div className="row">
          <div className="col-sm-12" >
          <button onClick={this.handleClick} id="CategoryButton"
            onMouseOver={this.handleMouseOver}>{categorie.name}</button>
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
