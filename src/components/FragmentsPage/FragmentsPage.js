//Dependencies
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

//Components

//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'

class FragmentsPage extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get('http://localhost:3000/fragments')
    .then(res => {
      this.setState({
        posts: res.data.slice(0, 1)
      });
    })
  }

  handleChange = (e) => {
    axios.get('http://localhost:3000/fragments/')
      .then(res => {
        this.setState({
          posts: res.data.slice(0, 2)
        });
      });
  }


  render() {
    const {posts} = this.state
    const postList = posts.length
      ? (posts.map(post => {
        return (
          <div className="col-md-12" id="HomePage_Fragment" key={post.id}>

          <p id='FragmentTitle'>{post.title}</p>
          <div className="row">
            <div className="col-md-4" id="image">
                <img src={post.source} alt="Imagen de referencia"/>
            </div>
            <div className="col-md-8">
              <p id='FragmentIntro'>{post.introduction}</p>
              <div className="row" id="FragmentButtons">
                <div className="col-md-12">
                  <Link to={'/' + post.id}>
                    <button className="btn btn-primary" id="ButtonRead">Leer este fragmento</button>
                  </Link>
                </div>
              </div>

              <div className="row" id="FragmentButtons">
                <div className="col-md-12">
                  <button className="btn btn-primary" id="ButtonNext" onClick={this.handleChange}>Muestrame otro fragmento</button>
                </div>
              </div>
            </div>
          </div>
        </div>)
      }))
      : (<div className="center">No hay fragmentos a mostrar</div>);

    return (
      <div id="HomePage">
        <div >
          <div className="row" id='HomeCenter'>
            <div className="col-sm-10" id="HomePage_Fragment_Section">
              <div id="FragmentSection">Hemos seleccionado un fragmento para ti</div>
                {postList}
            </div>
          </div>
        </div>
      </div>
)
}
}

export default FragmentsPage
