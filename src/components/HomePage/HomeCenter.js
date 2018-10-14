//Dependencies
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';

//Components
//styles
import '../../styles/home.css';

//Data
//import items from '../data/menu.js'

class HomeCenter extends Component {

  state ={
    category: 'Historia',
    subcategorie: 'Edad media'
}

  render(){
    return(
    <div className="row" >
    <div className="col-md-4" id="Categories">
      <p>{this.state.category}</p>

      </div>
    <div className="col-md-4" id="Categories">
Fragmento
      </div>
    <div className="col-md-4" id="Categories">
comunidad
      </div>
      </div>
    )
  }

}

export default HomeCenter
