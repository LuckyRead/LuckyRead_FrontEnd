import React, { Component } from 'react';
import book from '../resources/black_book.png';
import '../styles/Init.css';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';



class Init extends Component {
    render() {
  return (
    <div class="content">
    <div className="Init-header">
      <div class="row">
        <div class="col-md-6">
          <h1 className="Init-title">Bienvenido a LuckyRead</h1>
        <img src={book} className="Init-book" alt="book" />
        </div>
        <div class="col-md-6" align= "center">

          <div class="row">
            <h3 >Encontraras una lectura interesante.</h3>
          </div>
          <div class="row">
            <Button className="Init-Button" color="warning" tag={Link} to="/signIn">
              Haz clic para empezar
            </Button>{' '}
          </div>
        </div>
      </div>
  </div>
</div>
  );
}
}

export default Init;
