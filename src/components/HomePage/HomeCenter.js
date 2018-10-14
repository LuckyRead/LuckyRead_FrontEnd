//Dependencies
import React, { Component } from 'react';

//Components
import HomePage_Categories_List from './HomePage_Categories_List';
import HomePage_Fragment from './HomePage_Fragment';
//styles
import '../../styles/home.css';

//Data
//import items from '../data/menu.js'

class HomeCenter extends Component {


  render(){
    return(
    <div className="row" id='HomeCenter' >
    <div className="col-md-2"  id='HomePage_Categories_List'>
      <div id="CategoriesTitle">Categorias</div>
    <HomePage_Categories_List/>
    </div>
    <div className="col-sm-8" id="HomePage_Fragment_Section">
      <div id="FragmentSectionTitle">Hemos seleccionado un fragmento para ti</div>
    <HomePage_Fragment/>
      </div>
    <div className="col-md-2">
comunidad
      </div>
      </div>
    )
  }

}

export default HomeCenter
