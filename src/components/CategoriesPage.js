import React, { Component } from 'react';
import Navigation from './Navigation';
import Preferences from './Preferences';

class CategoriesPage extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="CategoriesPage">
        <Navigation/>
        <br/>
        <Preferences name = "Arte, cine y fotografía"/>
        <br/>
        <Preferences name = "Biografías, diarios y hechos reales"/>
        <br/>
        <Preferences name = "Calendarios y agendas"/>
        <br/>
        <Preferences name = "Ciencias, tecnología y medicina"/>
        <br/>
        <Preferences name = "Consulta"/>
        <br/>
        <Preferences name = "Cómics y manga"/>
        <br/>
        <Preferences name = "Deporte"/>
        <br/>
        <Preferences name = "Derecho"/>
        <br/>
        <Preferences name = "Economía y empresa"/>
        <br/>
        <Preferences name = "Fantasía y ciencia ficción"/>
        <br/>
        <Preferences name = "Guías de estudio y repaso"/>
        <br/>
        <Preferences name = "Historia"/>
        <br/>
        <Preferences name = "Hogar, manualidades y estilos de vida"/>
        <br/>
        <Preferences name = "Humor"/>
        <br/>
        <Preferences name = "Infantil"/>
        <br/>
        <Preferences name = "Informática, internet y medios digitales"/>
        <br/>
        <Preferences name = "Juvenil"/>
        <br/>
        <Preferences name = "Lengua, lingüística y redacción"/>
        <br/>
        <Preferences name = "Libros de texto"/>
        <br/>
        <Preferences name = "Libros universitarios y de estudios superiores"/>
        <br/>
        <Preferences name = "Libros y guías de viaje"/>
        <br/>
        <Preferences name = "Literatura y ficción"/>
        <br/>
        <Preferences name = "Policíaca, negra y suspense"/>
        <br/>
        <Preferences name = "Política"/>
        <br/>
        <Preferences name = "Religión"/>
        <br/>
        <Preferences name = "Romántica"/>
        <br/>
        <Preferences name = "Salud, familia y desarrollo personal"/>
        <br/>
        <Preferences name = "Sociedad y ciencias sociales"/>
      </div>
    )
  }

}

export default CategoriesPage
