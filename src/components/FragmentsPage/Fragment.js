import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import Reactions from './Reactions'
import axios from 'axios'
import '../../styles/fragmentcontainer.css';

class Fragment extends Component {
  state = {
    post: null,
    photo: "https://www.jardineriaon.com/wp-content/uploads/2017/09/flor-de-cosmos-830x556.jpg"
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
      <br/>
        <div className="row" id="container_fragment">
          <div className="text-center" id="title_fragment">
            <h2><strong>{this.state.post.title}</strong></h2>
            <br/>
            <div className = "row justify-content-center" id="content">
              <div className="col-4" id="image">
                <img src={this.state.photo} alt="Imagen de referencia"/>

              </div>
              <div className="col-8" id="text">
                <h4><strong>Introducción</strong></h4>
              <p className = "text-justify">{this.state.post.introduction}</p>
                <br/>
                <h4><strong>Contenido</strong></h4>
                <p className = "text-justify">{this.state.post.content}</p>
                <br/>
                <h6><strong>Fuente</strong></h6><p>{this.state.post.source}</p>
              </div>
            </div>
          </div>
          <Reactions/>
        </div>
        <div className="row justify-content-center" id="button">
          <Button color="primary" tag={Link} to="/FragmentsPage">Volver</Button>{' '}
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
