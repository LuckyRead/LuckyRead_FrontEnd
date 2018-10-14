//Dependencies
import React, { Component } from 'react';

//Components

//styles
import '../../styles/home.css';

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
    <p>{this.state.introduction}</p>
  <button className="btn btn-primary">Leer este fragmento</button>

      </div>
    )
  }

}

export default HomePage_Fragment
