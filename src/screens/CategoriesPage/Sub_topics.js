import React, { Component } from "react";
import { Label, Input} from 'reactstrap';
import axios from 'axios';
import "./preferences.css";

//Icons

class Sub_topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
  }
  showSubCategories() {
    console.log("subcategories");
  }

  componentDidMount(){
    //mirar si le gusta o no el subtopico al usuario
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/subtopics/love/"+this.props.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }

    }).then( res =>{
      console.log(res)
      if(res['data']['hurra']){
        this.setState({
          check: true
        })
      }else{
        this.setState({
          check: false
        })
        console.log(res)
      }
    }

    )
  }

  handleClick = (e) => {
    const checked = e.target.checked
    if(checked === true){
      console.log('checked')
      axios({
        method: "post",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/add/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
    }else{
      console.log('not checked')
      axios({
        method: "post",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/rm/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
    }

  }

  render() {

    return (
      <Label check>
      {this.state.check ?
         (<Input type="checkbox" defaultChecked onClick = {this.handleClick}/>)
        :(<Input type="checkbox" onClick = {this.handleClick}/>)
      } {this.props.name}


      </Label>
      /*<div key={this.props.topic_id}>
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id={this.props.id} onClick={this.showSubCategories}/>
          <label className="custom-control-label" htmlFor={this.props.id}>{this.props.name}</label>
        </div>
      </div>*/
    );
  }
}

export default Sub_topics;
