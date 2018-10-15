import React, { Component } from 'react';
import Navigation from './Navigation';
import Preferences from './Preferences';
import RegistrationPopUp from './RegistrationPopUp';
import { Container, Row, Col } from 'reactstrap';

class CategoriesPage extends Component {
  render(){
    return(
    <div>
      <Navigation/>
      <br/>
      <h1 className="text-white"><strong>&nbsp;Elige tus gustos... </strong></h1>
      <Container fluid>
      <br/>
        <Row className="row justify-content-center">
          <Col sm="auto"><Preferences name = "Hogar, manualidades y estilos de vida"/></Col>
          <Col sm="auto"><Preferences name = "Salud, familia y desarrollo personal"/></Col>
          <Col sm="auto"><Preferences name = "Biografías, diarios y hechos reales"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-center">
          <br/>
          <Col sm="auto"><Preferences name = "Religión"/></Col>
          <Col sm="1"></Col>
          <Col sm="auto"><Preferences name = "Política"/></Col>
          <Col sm="1"></Col>
          <Col sm="auto"><Preferences name = "Infantil"/></Col>
          <Col sm="1"></Col>
          <Col sm="auto"><Preferences name = "Historia"/></Col>
          <Col sm="1"></Col>
          <Col sm="auto"><Preferences name = "Consulta"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-around">
          <Col sm="auto"><Preferences name = "Libros universitarios y de estudios superiores"/></Col>
          <Col sm="auto"><Preferences name = "Humor"/></Col>
          <Col sm="auto"><Preferences name = "Romántica"/></Col>
          <Col sm="auto"><Preferences name = "Informática, internet y medios digitales"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-around">
          <Col sm="auto"><Preferences name = "Derecho"/></Col>
          <Col sm="auto"><Preferences name = "Juvenil"/></Col>
          <Col sm="auto"><Preferences name = "Deporte"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-center">
          <Col sm="auto"><Preferences name = "Ciencias, tecnología y medicina"/></Col>
          <Col sm="auto"><Preferences name = "Lengua, lingüística y redacción"/></Col>
          <Col sm="auto"><Preferences name = "Libros y guías de viaje"/></Col>
          <Col sm="auto"><Preferences name = "Arte, cine y fotografía"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-center">
          <Col sm="auto"><Preferences name = "Policíaca, negra y suspense"/></Col>
          <Col sm="auto"><Preferences name = "Sociedad y ciencias sociales"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-around">
          <Col sm="auto"><Preferences name = "Cómics y manga"/></Col>
          <Col sm="auto"><Preferences name = "Libros de texto"/></Col>
          <Col sm="auto"><Preferences name = "Economía y empresa"/></Col>
        </Row>
        <br/>
        <Row className="row justify-content-around">
          <Col sm="auto"><Preferences name = "Fantasía y ciencia ficción"/></Col>
          <Col sm="auto"><Preferences name = "Calendarios y agendas"/></Col>
          <Col sm="auto"><Preferences name = "Guías de estudio y repaso"/></Col>
          <Col sm="auto"><Preferences name = "Literatura y ficción"/></Col>
        </Row>
        <br/>
        <br/>
        <Row className="row justify-content-end">
          <Col sm="auto"><RegistrationPopUp/></Col>
        </Row>
      </Container>


      </div>
    )
  }

}

export default CategoriesPage
