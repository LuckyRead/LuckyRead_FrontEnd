//Dependencies
import React, { Component } from 'react';

//Components

import HomePage_Fragment from './HomePage_Fragment';
//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'




class HomePage extends Component {


  render(){
    return(
  <div id="HomePage">
    <div >
      <div className="row" id='HomeCenter' >
      <div className="col-sm-10" id="HomePage_Fragment_Section">
        <div id="FragmentSectionTitle">Hemos seleccionado un fragmento para ti</div>
      <HomePage_Fragment/>
        </div>

        </div>
      </div>
      </div>
    )
  }

}

export default HomePage
