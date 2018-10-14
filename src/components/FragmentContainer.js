import React, { Component } from 'react';

//Styles
import '../styles/fragmentcontainer.css'


class FragmentContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  render(){
    return(
      <div className="container">
        <div className="row" id="container_fragment">
          <div className="col-4" id="image">
          Imagen
          </div>
          <div className="col-8" id="text">
            <h1>{this.props.title}</h1>
            <p>{this.props.fragment}</p>
          </div>
        </div>
      </div>
    )
  }

}
export default FragmentContainer;
