import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import '../styles/preferences.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Preferences extends Component {
  constructor (props) {
    super(props);
  }


  render() {
    return (
      <div className="btn-group-toggle" data-toggle="buttons">
        <label className="btn btn-primary ">
          <input type="checkbox" autocomplete="off"/> {this.props.name}
        </label>
      </div>
    );
  }
}

export default Preferences;
