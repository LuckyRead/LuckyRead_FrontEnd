//Dependencies
import React, { Component } from 'react';
import { Link } from "react-router-dom"
//Components

//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'


class HomePage_Fragment extends Component {


  state ={
      id: '1',
        title: 'Plan Marshall',
        introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
         photourl: 'https://ibb.co/mdMZJ0'
  }


  render(){
    return(
      <div className="col-md-12" id="HomePage_Fragment">
      <p id='FragmentTitle'>{this.state.title}</p>
    <div className="row">
      <div className="col-md-4" >
        <div id="FragmentImage">

        </div>
        </div>
        <div className="col-md-8">
          <p id='FragmentIntro'>{this.state.introduction}</p>
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
  }

}

export default HomePage_Fragment
