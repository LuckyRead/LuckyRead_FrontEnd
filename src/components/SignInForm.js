import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';


class SignInForm extends Component {
    constructor () {
      super();
    }

    render() {
      return (
        <form>
          <div className="col-sm-12" id = "Form">
          <h1 className="text-center"> Crea tu cuenta </h1>
            <div className="form-group row">
              <label for="inputName" className="col-sm-5 col-form-label">Nombres</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputName" placeholder="¿Cómo te llamas?" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputLastName" className="col-sm-5 col-form-label">Apellidos</label>
              <div className="col-sm-7">
                <input type="text" className="form-control" id="inputLastName" placeholder="Apellidos" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputEmail" className="col-sm-5 col-form-label">Correo</label>
              <div className="col-sm-7">
                <input type="email" className="form-control" id="inputEmail" placeholder="Correo" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputUsername" className="col-sm-5 col-form-label">Nombre de usuario</label>
              <div className="col-sm-7">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroupPrepend2">@</span>
                  </div>
                  <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label for="inputPassword" className="col-sm-5 col-form-label">Contraseña</label>
              <div className="col-sm-7">
                <input type="password" className="form-control" id="inputPassword" placeholder="Contraseña" />
              </div>
            </div>
            <div className="form-group row">
              <label for="inputRepeatPassword" className="col-sm-5 col-form-label">Repetir Contraseña</label>
              <div className="col-sm-7">
                <input type="password" className="form-control" id="inputRepeatPassword" placeholder="Repite tu contraseña" />
              </div>
            </div>
            <div id= "center"><button type="submit" className="btn btn-primary">Registrarme</button>
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
export default SignInForm;
