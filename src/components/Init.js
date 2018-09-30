import React, { Component } from 'react';
import book from '../resources/black_book.png';
import '../styles/init.css';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import Navigation from './Navigation'



class Init extends Component {
    render() {
  return (
    <div class="container-fluid" className="Init">
      <Navigation></Navigation>
        <h1 className="Init-title">Bienvenido a LuckyRead</h1>
        <Button className="Init-Button" color="warning" tag={Link} to="/signIn">
        <h3>Haz clic para empezar</h3>
        </Button>{' '}
      <img src={book} className="Init-book" alt="book" />
    <h3 >Encontraras una lectura interesante.ncontraras una lectura interesante.ncontraras una lectura interesante.ncontraras una lectura interesante.</h3>


    </div>

  );
}
}

export default Init
