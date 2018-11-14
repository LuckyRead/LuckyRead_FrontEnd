//Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
//Components
import axios from "axios";
//styles
import "./homepage.css";

class RandomFragmentPage extends Component {
  state = {
    posts: []
  };

  constructor() {
    super();
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }

  forceUpdateHandler() {
    this.forceUpdate();
  }

  componentDidMount() {
    console.log(localStorage.jwtToken);
    axios({
      method: "GET",
      url: "https://luckyread-backend.herokuapp.com/api/fragments/something",
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }
    }).then(
      response => {
        console.log(response);
        this.setState({
          posts: response["data"]
        });
        console.log(this.state);
        console.log(response.data.title);
      },
      err => {
        console.log("Error pidiendo fragmento random");
      }
    );
  }

  render() {
    const { posts } = this.state;
    return (
      <div id="HomePage">
        <div>
          <div className="row" id="HomeCenter">
            <div className="col-sm-10" id="HomePage_Fragment_Section">
              <div id="FragmentSection">
                Hemos seleccionado un fragmento para ti
              </div>
              <div className="col-md-12" id="HomePage_Fragment" key={posts.id}>
                <p id="FragmentTitle">
                  <strong> {posts.title}</strong>
                </p>
                <div className="row">
                  <div className="col-md-4" id="image">
                    <img src={"data:image/png;base64, " + posts.base64_image} alt="Imagen de referencia" />
                  </div>
                  <div className="col-md-8">
                    <p id="FragmentIntro">{posts.introduction}</p>
                    <div className="row" id="FragmentButtons">
                      <div className="col-md-12">
                        <Link to={"/" + posts.id}>
                          <button className="btn btn-primary" id="ButtonRead">
                            Leer este fragmento
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="row" id="FragmentButtons">
                      <div className="col-md-12">
                        <Link to={"/pdf/" + posts.id}>
                          <button className="btn btn-primary" id="ButtonPDF">
                            Leer fragmento en PDF
                          </button>
                        </Link>
                      </div>
                    </div>

                    <div className="row" id="FragmentButtons">
                      <div className="col-md-12">
                        <button
                          className="btn btn-primary"
                          id="ButtonNext"
                          onClick={this.forceUpdateHandler}
                        >
                          Muestrame otro fragmento
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RandomFragmentPage;
