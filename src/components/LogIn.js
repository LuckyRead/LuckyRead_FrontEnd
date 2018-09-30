import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import Navigation from './Navigation';
import '../styles/LogIn.css';


class LogIn extends Component {
    constructor () {
      super();
    }

    render() {
      return (
        <form>
          <div className="col-sm-12" id = "Form">
          <h2 className="text-center" className="Login-title"> Ingresa a LuckyRead </h2>
            <div className="form-group row">
              <label for="inputName" className="col-sm-5 col-form-label">Nombre de usuario</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputName" placeholder="ej: lraf581" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail" className="col-sm-5 col-form-label">Contrasena</label>
              <div className="col-sm-7">
                <input type="email" className="form-control" id="inputEmail" placeholder="*****" />
              </div>
            </div>

            <div id= "center"><button type="submit" className="btn btn-primary">Iniciar Sesion</button>
              <br/>
              <h6></h6>
              <h8>O ingresa con tus redes sociales</h8> &nbsp;
              <br/>
              <h6></h6>
              <SocialIcon url="http://facebook.com/" /> &emsp;
              <SocialIcon url="http://twitter.com/" /> &emsp;
              <SocialIcon url="http://google.com/" /> &emsp;
            </div>
          </div>
        </form>
    )
  }
}
export default LogIn;
