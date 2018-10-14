//Dependencies
import React, { Component } from 'react';

//Components
import HomePage_Categories_List from './HomePage_Categories_List';
//styles
import '../../styles/home.css';

//Data
//import items from '../data/menu.js'

class HomeCenter extends Component {

  state ={
    category: 'Historia',
    subcategorie: 'Edad media'
  }

handleClick = (e) => {

  this.setState({
      category:'Naturaleza'
  });
  console.log(this.state);
}

handleMouseOver= (e) => {
  console.log(e.target, e.pageX);
}


handleCopy= (e) => {
  console.log('Try being original');
}

  render(){
    return(
    <div className="row" id='HomeCenter' >
    <div className="col-md-4">
      <p>{this.state.category}</p>
    <button onClick={this.handleClick} >Agregar categoria</button>
  <button onMouseOver={this.handleMouseOver}>Hover me</button>
<p onCopy={this.handleCopy}>What we think, we become</p>
<HomePage_Categories_List/>

  </div>
    <div className="col-md-4">
Fragmento
      </div>
    <div className="col-md-4">
comunidad
      </div>
      </div>
    )
  }

}

export default HomeCenter
