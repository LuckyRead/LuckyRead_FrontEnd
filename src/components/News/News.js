import React, { Component } from 'react';

import '../../styles/fragmentcontainer.css'
import axios from 'axios';

class News extends Component {
  constructor (props) {
    super(props);
  }

  render(){
    const divStyle = {
      width: '18rem',
      height:'30rem'
    };
    return(
      <div class="carousel-item">
        <div className="card" style={divStyle} id = {this.props.title}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.date}</h6>
            <p className="card-text">{this.props.description}</p>
            <a href={this.props.source}>Ver más...</a>
          </div>
        </div>
      </div>
    )
  }


}


export default News;
