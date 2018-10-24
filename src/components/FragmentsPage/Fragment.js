import React, { Component } from 'react'
import Reactions from './Reactions'
import '../../styles/fragmentcontainer.css';
import API from '../../api';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom'

class Fragment extends Component {
  state = {
    post: null
  }
  componentDidMount(){

    let id = this.props.match.params.fragment_id;
    API.get('/api/fragments/'+id)
      .then(res => {
        console.log(res)
        this.setState({
          post: res.data.data.attributes
        });
        //console.log(res.data);
        console.log("source")
        console.log(this.props.source)
      });
  }
  render() {

    const post = this.state.post ? (
      <div className="container" id="container">
      <br/>
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
                <h6><strong>Fuente</strong></h6>
                <p className = "text-center">{this.state.post.source}</p>
              </div>
            </div>
          </div>
          <Reactions/>
        </div>
        <div className="row justify-content-center">
          <Button color='primary' tag={Link} to="/fragmentspage">Volver</Button>
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
