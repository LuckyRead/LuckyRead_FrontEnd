import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/Init.css';

class Init extends Component {
  render() {
    return (
      <div className="Init">
        <header className="Init-header">
          <img src={logo} className="Init-logo" alt="logo" />
          <h1 className="Init-title">Welcome to React</h1>
        </header>
        <p className="Init-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Init;
