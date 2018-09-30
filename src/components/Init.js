import React, { Component } from 'react';
import book from '../resources/black_book.png';
import SignInForm from './SignInForm';
import '../styles/init.css';
import '../styles/navbar.css';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation'



class Init extends Component {
  constructor() {
    super();
  }

  render(){
    return(

      <div className="container-fluid" >
        <Navigation></Navigation>

        <h1 className="Init-title">Bienvenido a LuckyRead</h1>
      <Button tag={Link} to="/signIn" className="Init-button-back"></Button>{' '}
      <h3 className="Init-info">Encontraras fragmentos de texto interesantes </h3>

      </div>
    )
  }

}

export default Init
