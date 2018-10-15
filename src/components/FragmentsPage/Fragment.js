import React, { Component } from 'react'
import axios from 'axios'
import '../../styles/fragmentcontainer.css';

class Fragment extends Component {
  state = {
    post: null
  }
  componentDidMount(){
    let id = this.props.match.params.fragment_id;
    axios.get('http://localhost:3000/fragments/' + id)
      .then(res => {
        this.setState({
          post: res.data
        });
        //console.log(res.data);
        console.log("source es")
        console.log(this.props.source)
      });
  }
  render() {

    const post = this.state.post ? (
      <div className="container" id="container">
        <div className="row" id="container_fragment">
          <div className="text-center" id="title_fragment">
            <h2><strong>{this.state.post.title}</strong></h2>
            <br/>
            <div className = "row justify-content-center" id="content">
              <div className="col-4" id="image">
                <img src={this.state.post.source} alt="Imagen de referencia"/>
      
              </div>
              <div className="col-8" id="text">
                <h4><strong>Introducción</strong></h4>
              <p className = "text-justify">{this.state.post.introduction}</p>
                <br/>
                <h4><strong>Contenido</strong></h4>
                <p className = "text-justify">{this.state.post.content}</p>
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

export default Fragment
