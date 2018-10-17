import React from 'react'
import {Link} from 'react-router-dom';
import '../../styles/init.css';


const Init = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="InitCenter">
        <div className="jumbotron" id="Init-panel" >
        <strong><h1 className="Init-title">Bienvenido a LuckyRead</h1></strong>
        <h3 className="Init-subtitle"><p>¿Quieres leer algo pero no sabes qué?
          Aquí te ofrecemos textos interesantes al azar según tus gustos.
          ¡Podrás interactuar con otros usuarios y aprender algo nuevo cada día!</p></h3>

        <Link to="/signup">
        <button type="button" className="Init-button">
        <strong>Empezar</strong>
        </button>
        </Link>
          </div>
            </div>
      </div>
    </div>
  )
}

export default Init
