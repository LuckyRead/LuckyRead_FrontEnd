import React from 'react'
import {Link} from 'react-router-dom';
import '../../styles/init.css';

const Init = () => {
  return (<div>
    <div className="container-fluid">
      <div className="jumbotron" id="Init">
        <div className="row">
          <div className="col-md-12" id="InitPanel">
            <strong>
              <h1 id="Init-title">Bienvenido a LuckyRead</h1>
            </strong>
            <hr></hr>
            <h3 className="Init-subtitle">
              <p>¿Quieres leer algo pero no sabes qué? Aquí te ofrecemos textos interesantes al azar según tus gustos. ¡Podrás interactuar con otros usuarios y aprender algo nuevo cada día!</p>
            </h3>
            <Link to="/signup">
              <button className="button button5" id="Init-button">
                <strong>Empezar</strong>
              </button>
            </Link>

          </div>
        </div>

      </div>
    </div>
  </div>)
}

export default Init
