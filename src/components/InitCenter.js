//Dependencies
import React, { Component } from 'react';
<<<<<<< HEAD
import book from '../resources/black_book.png';
=======

>>>>>>> feature/17-home-view
import '../styles/init.css';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';
<<<<<<< HEAD
=======


>>>>>>> feature/17-home-view


class InitCenter extends Component {


<<<<<<< HEAD
=======


>>>>>>> feature/17-home-view
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
