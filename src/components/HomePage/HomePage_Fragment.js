//Dependencies
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
//Components

//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'




class HomePage_Fragment extends Component {

  state={
    posts: []
  }
  componentDidMount(){
    axios.get('http://localhost:3000/fragments')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0,1)
        });
      })
  }



  render(){
    const { posts } = this.state
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="col-md-12" id="HomePage_Fragment" key={post.id}>
          <p id='FragmentTitle'>{post.title}</p>
        <div className="row">
          <div className="col-md-4" >
            <div id="FragmentImage">
            </div>
            </div>
            <div className="col-md-8">
              <p id='FragmentIntro'>{post.introduction}</p>
              <div className="row" id="FragmentButtons">
                <div className="col-md-12">
              <Link to="/FragmentsPage">
                    <button className="btn btn-primary" id="ButtonRead">Leer este fragmento</button>
                            </Link>
                </div>
              </div>

              <div className="row" id="FragmentButtons">
                <div className="col-md-12">
                  <button className="btn btn-primary" id="ButtonNext">Muestrame otro fragmento</button>
                  </div>
              </div>
              </div>
        </div>
      </div>
        )
      })
    ) : (
      <div className="center">No hay fragmentos a mostrar</div>
    );

    return(
      <div>
        {postList}
      </div>
    )
  }

}

export default HomePage_Fragment
