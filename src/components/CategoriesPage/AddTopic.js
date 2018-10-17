import React, { Component } from 'react';


class AddTopic extends Component {

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default AddTopic

/*

  state= {
    name: null
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  //  console.log(this.state);
  this.props.addTopic(this.state);
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

*/
