//Dependencies
import React, { Component } from 'react';

import '../styles/init.css';
import '../styles/navbar.css';
import {Link} from 'react-router-dom';




class InitCenter extends Component {




  render(){
    return(
  <div className="InitCenter">
  <div className="jumbotron" id="Init-panel" >
  <strong><h1 className="Init-title">Bienvenido a LuckyRead</h1></strong>
  <h3 className="Init-subtitle"><p>¿Quieres leer algo pero no sabes qué?
    Aquí te ofrecemos textos interesantes al azar según tus gustos.
    ¡Podrás interactuar con otros usuarios y aprender algo nuevo cada día!</p></h3>

  <Link to="/SignUp">
  <button type="button" className="Init-button">
  <strong>Empezar</strong>
  </button>
  </Link>

    </div>
      </div>
    )
  }

}

export default InitCenter
