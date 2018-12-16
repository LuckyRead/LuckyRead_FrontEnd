import React, { Component } from "react";
import axios from "axios";
import "./preferences.css";

//Icons

class Sub_topics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: this.props.love
    };
  }

  componentDidMount() {
    this.refs.checkbox.disabled = !this.props.checked;
  }


  componentDidUpdate(prevProps) {


    if (this.props.checked !== prevProps.checked) {

      this.refs.checkbox.checked = this.props.checked;
      this.refs.checkbox.disabled = !this.props.checked;
    }
  }
  handleClick = e => {
    const checked = e.target.checked;
    if (checked === true) {

      axios({
        method: "post",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/add/" +
          this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      }).then(response => {

      });
    } else {

      axios({
        method: "delete",
        url:
          "https://luckyread-backend.herokuapp.com/api/preference/rm/" +
          this.props.id,
        headers: {
          Authorization: "Bearer " + localStorage.jwtToken
        }
      }).then(response => {

      });
    }
  };

  render() {
    return (
      <div>
        <div className="pretty p-default" id="subcategories">
          {this.state.check ? (
            <input
              type="checkbox"
              defaultChecked
              onClick={this.handleClick}
              ref="checkbox"
            />
          ) : (
              <input type="checkbox" onClick={this.handleClick} ref="checkbox" />
            )}
          <div className="state p-success">
            <label />
          </div>
        </div>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

export default Sub_topics;
