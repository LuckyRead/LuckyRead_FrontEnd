import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/fragmentcontainer.css';
import {connect} from 'react-redux';

class Fragment extends Component {

  render() {

    const post = this.props.post ? (
      <div className="container" id="container">
        <div className="row" id="container_fragment">
          <div className="text-center" id="title_fragment">
            <h2><strong>{this.props.post.title}</strong></h2>
            <br/>
            <div className = "row justify-content-center" id="content">
              <div className="col-4" id="image">
                <img src={this.props.post.source} alt="Imagen de referencia"/>

              </div>
              <div className="col-8" id="text">
                <h4><strong>Introducción</strong></h4>
              <p className = "text-justify">{this.props.post.introduction}</p>
                <br/>
                <h4><strong>Contenido</strong></h4>
                <p className = "text-justify">{this.props.post.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return (
      <div className="container">
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.fragment_id;
  return {
    post: state.posts.find(post => post.id === id)
  }
}

export default connect(mapStateToProps)(Fragment)
