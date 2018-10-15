//Dependencies
import React, { Component } from 'react';

//Components
import HomePage_Categories_List from './HomePage_Categories_List';
import HomePage_Fragment from './HomePage_Fragment';
//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'

class HomeCenter extends Component {


  render(){
    return(
    <div className="row" id='HomeCenter' >
    <div className="col-sm-8" id="HomePage_Fragment_Section">
      <div id="FragmentSectionTitle">Hemos seleccionado un fragmento para ti</div>
    <HomePage_Fragment/>
      </div>

      </div>
    )
  }

}

export default HomeCenter
