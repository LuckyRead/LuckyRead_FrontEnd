//Dependencies
import React, { Component } from 'react';

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
    <div className="row" >
    <div className="col-md-4" id="Categories">
      <p>{this.state.category}</p>
    <button onClick={this.handleClick} >Agregar categoria</button>
  <button onMouseOver={this.handleMouseOver}>Hover me</button>
<p onCopy={this.handleCopy}>What we think, we become</p>
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
