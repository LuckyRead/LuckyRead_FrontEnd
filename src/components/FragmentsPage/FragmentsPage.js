//Dependencies
import React, {Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

//Components

//styles
import '../../styles/homepage.css';

//Data
//import items from '../data/menu.js'

class FragmentsPage extends Component {

  state = {
    posts: []
  }



    componentDidMount() {

      axios({
        method: 'POST', url: 'http://10.203.2.224:3000/api/fragments/something',
        headers:
        {
          Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzk3OTgxMzIsInN1YiI6MTgxfQ.21lgp1YnHwAj_WrxluKH_S3_wsrepMiQmXRn2S3mHgE"
        },
        data: {
          username: "daescobarp"
        }
      }).then(response => {
        console.log(response)
        this.setState({
          posts: response["data"]

        });
        console.log(this.state);
        console.log(response.data.title);

      });

    }


      // axios.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1Mzk3OTgxMzIsInN1YiI6MTgxfQ.21lgp1YnHwAj_WrxluKH_S3_wsrepMiQmXRn2S3mHgE`;
      // // Send a POST request
      //     console.log(axios.defaults.headers);
      // axios({
      //   method: 'post',
      //   url: 'http://10.203.2.224:3000/api/fragments/something',
      //   data: {
      //     username: "daescobarp"
      //   }
      // }).then(response => {
      //   console.log(response["data"]["data"])
      //   this.setState({
      //     posts: response["data"]["data"]
      //
      //   });
      //   console.log(this.state);
      // });
      //



  //
  // componentDidMount() {
  //   axios.get('10.203.2.224:3000/fragments')
  //   .then(res => {
  //       console.log(res);
  //     this.setState({
  //       posts: res.data.slice(0, 1)
  //     });
  //   })
  // }

  handleChange = (e) => {
    axios.get('http://10.203.2.224:3000/fragments')
      .then(res => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 2)
        });
      });
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

              <p id='FragmentTitle'>{posts.title}</p>
              <div className="row">
              <div className="col-md-4" id="image">
                  <img src={posts.image_path} alt="Imagen de referencia"/>
              </div>
                <div className="col-md-8">
                  <p id='FragmentIntro'>{posts.introduction}</p>
                  <div className="row" id="FragmentButtons">
                    <div className="col-md-12">
                      <Link to={'/' + 1}>
                        <button className="btn btn-primary" id="ButtonRead">Leer este fragmento</button>
                      </Link>
                    </div>
                  </div>

                  <div className="row" id="FragmentButtons">
                    <div className="col-md-12">
                      <button className="btn btn-primary" id="ButtonNext" onClick={this.handleChange}>Muestrame otro fragmento</button>
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
