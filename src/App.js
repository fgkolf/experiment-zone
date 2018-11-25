import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestPopup from './TestPopup';
import TestFileSaver from './TestFileSaver';

const params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={() => { window.open("http://www.google.com", "someName", params) }}>
            Native popup
          </button>
          <TestPopup />
          <TestFileSaver />
        </header>
      </div>
    );
  }
}

export default App;
