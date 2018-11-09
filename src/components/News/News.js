import React, { Component } from 'react';

import '../../styles/fragmentcontainer.css'

class News extends Component {

  render(){
    const divStyle = {
      width: '18rem',
      height:'30rem'
    };
    return(
      <div className="carousel-item">
        <div className="card" style={divStyle}>
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
