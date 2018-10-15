import React, { Component } from 'react';

//Styles
import '../styles/fragmentcontainer.css'


class FragmentContainer extends Component {
  constructor (props) {
    super(props);

  }
  render(){
    return(
      <div className="container">
        <div className="row text-center" id="title_fragment">
          <h2><strong>{this.props.title}</strong></h2>
        </div>
        <div className="row" id="container_fragment">
          <div className="col-4" id="image">
            <img src={this.props.image} alt="Jack el Destripador"/>
          </div>
          <div className="col-8" id="text">
            <h4><strong>Introducción</strong></h4>
            <p className = "text-justify">{this.props.introduction}</p>
            <br/>
            <h4><strong>Contenido</strong></h4>
            <p className = "text-justify">{this.props.content}</p>
          </div>
        </div>
      </div>
    )
  }

}
export default FragmentContainer;
