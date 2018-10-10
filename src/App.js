import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Timothy Baumgartner</h1>
          <i>Software Developer</i>
        </header>
        <div className="container">
          <div className="row" id="headerRow">
            <h3 className="projects__header">Selected Projects</h3>
            <a href="/about" className="menu__link">About</a>
          </div>
          <div className="row">
            <div className="project">
              <h2>
                <a href="/detail/spokane-transit-app">
                  <span className="project__title">Unofficial Spokane Transit Authority Companion App</span>
                </a>
              </h2>
              <p>
                A work in progress to compete with <a href="https://spokanetransit.com">spokanetransit.com</a>.<br />
                You can follow along on <a href="https://github.com/cstaaben/transit-webApp">GitHub</a> or <a href="http://timothy-b.com/transit-webApp/busForm.html">see it live</a>.<br />
                Last updated: Nov 9
              </p>
            </div>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
