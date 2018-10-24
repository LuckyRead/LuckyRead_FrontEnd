import React, { Component } from 'react';
import '../../styles/preferences.css';

//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Preferences extends Component {
  constructor (props) {
    super(props);
    this.state = {
      hidden: true
    }
  }

  myFunction = (e) => {
  const button_class = e.target.className
  console.log(button_class);

  if (button_class === "btn btn-primary active focus"){
    this.setState({hidden: false})
  } else {
    this.setState({hidden: true})
  }
}


  render() {
    return (
      <div>
        <div className="btn-group-toggle" data-toggle="buttons">
          <label className="btn btn-primary"  id = {this.props.name} onClick = {this.myFunction}>
            <FontAwesomeIcon icon="check" size ="sm" hidden = {this.state.hidden}/>&nbsp;<input type="checkbox" autoComplete="off"/> {this.props.name}
          </label>
        </div>
        <br/>
      </div>
    );
  }
}

export default Preferences;
