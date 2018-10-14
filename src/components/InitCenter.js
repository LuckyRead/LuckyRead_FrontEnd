//Dependencies
import React, { Component } from 'react';
<<<<<<< HEAD
import book from '../resources/black_book.png';
=======

>>>>>>> 9a09a9668c63fa1c64a75026c66f7d53c8634596
import '../styles/init.css';
import '../styles/navbar.css';
import { Button } from 'reactstrap';
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
<<<<<<< HEAD
  <Button className="Init-button" tag={Link} to="/categoriesPage">
  <strong>Empezar</strong>
  </Button>

=======

  <Link to="/SignUp">
  <Button type="button" className="Init-button">
  <strong>Empezar</strong>
  </Button>
  </Link>
>>>>>>> 9a09a9668c63fa1c64a75026c66f7d53c8634596

    </div>
      </div>
    )
  }

}

export default InitCenter
