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
    //console.log("subcategories");
  }

  componentWillMount(){
    //mirar si le gusta o no el subtopico al usuario
    axios({
      method: "get",
      url:
        "https://luckyread-backend.herokuapp.com/api/subtopics/love/"+this.props.id,
      headers: {
        Authorization: "Bearer " + localStorage.jwtToken
      }

    }).then( res =>{
      //console.log(res)
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
    })
  }


  handleClick = (e) => {
    const checked = e.target.checked
    if(checked === true){
      //console.log('checked')
      axios({
        method: "post",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/add/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
    }else{
      //console.log('not checked')
      axios({
        method: "delete",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/rm/"+this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      })
    }

  }

  render() {
    //console.log('render SUBTOPIC: ' + this.props.id)
    return (
      <div className="pretty p-default" id="subcategories">
        {this.state.check ?
           (<input type="checkbox" defaultChecked onClick = {this.handleClick}/>)
          :(<input type="checkbox" onClick = {this.handleClick}/>)
        }
        <div className="state p-success">
            <label>{this.props.name}</label>
        </div>
      </div>

    );
  }
}

export default Sub_topics;
