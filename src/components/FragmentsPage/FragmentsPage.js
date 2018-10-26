//Dependencies
import React, {Component} from 'react';
import {Link} from "react-router-dom";
//Components
import axios from 'axios';
//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'

class FragmentsPage extends Component {

  state = {
    posts: []
  }

  constructor(){
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  };

  forceUpdateHandler(){
    this.forceUpdate();
  };

    componentDidMount() {

      //get current user
      axios({
          method:'get',
          url: 'https://luckyread-backend.herokuapp.com/api/users/current',
          headers: {
            Authorization: "Bearer "+ localStorage.jwtToken
          }
      }).then(
        response => {
          console.log('respuesta get user')
          console.log(response)
          const user_r = response.data.current_user;
          localStorage.setItem('current_user', user_r);
      }).catch(function (error) {
        console.log('aquiii errorrr');
        console.log('error');
      });

      //get

      axios({
        method: 'GET', url: 'https://luckyread-backend.herokuapp.com/api/fragments/something',
        headers:
        {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      }).then(

        (response) => {
        console.log(response)
        this.setState({
          posts: response["data"]

        });
        console.log(this.state);
        console.log(response.data.title);

      },
      (err) => {
        console.log('el error es pidiendo fragmento random')
      }


    );

    }



  render() {
    const {posts} = this.state
    return (
      <div id="HomePage">
        <div >
          <div className="row" id='HomeCenter'>
            <div className="col-sm-10" id="HomePage_Fragment_Section">
              <div id="FragmentSection">Hemos seleccionado un fragmento para ti</div>
              <div className="col-md-12" id="HomePage_Fragment" key={posts.id}>

              <p id='FragmentTitle'><strong>  {posts.title}</strong></p>
              <div className="row">
              <div className="col-md-4" id="image">
                  <img src={posts.image_path} alt="Imagen de referencia"/>
              </div>
                <div className="col-md-8">
                  <p id='FragmentIntro'>{posts.introduction}</p>
                  <div className="row" id="FragmentButtons">
                    <div className="col-md-12">
                      <Link to={'/' + posts.id}>
                        <button className="btn btn-primary" id="ButtonRead">Leer este fragmento</button>
                      </Link>
                    </div>
                  </div>

                  <div className="row" id="FragmentButtons">
                    <div className="col-md-12">
                      <button className="btn btn-primary" id="ButtonNext" onClick= {this.forceUpdateHandler}>Muestrame otro fragmento</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
)
}
}

export default FragmentsPage
