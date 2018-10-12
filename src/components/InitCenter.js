import React, { Component } from 'react';
import book from '../resources/black_book.png';
import '../styles/init.css';
import '../styles/navbar.css';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation'
import logo from '../resources/white_logo_luckyread.png';



class InitCenter extends Component {


  constructor() {
    super();
  }

  render(){
    return(
  <div className="InitCenter">
  <div className="jumbotron" id="Init-panel" >
  <strong><h1 className="Init-title">Bienvenido a LuckyRead</h1></strong>
  <h3 className="Init-subtitle"><p>¿Quieres leer algo pero no sabes qué?
    Aquí te ofrecemos textos interesantes al azar según tus gustos.
    ¡Podrás interactuar con otros usuarios y aprender algo nuevo cada día!</p></h3>
  <Button className="Init-button" tag={Link} to="/categoriesPage">
  <strong>Empezar</strong>
  </Button>


    </div>
      </div>
    )
  }

}

export default InitCenter