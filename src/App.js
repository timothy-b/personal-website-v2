import React, { Component } from 'react';
import reactLogo from './logo.svg';
import githubLogo from './GitHub_Logo_White.png';
import githubImage from './GitHub-Mark-Light-32px.png';
import linkedinLogo from './LinkedIn_Logo_White.png';
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
          <div style={{marginBottom: "1em", backgroundColor: "#2b3e50"}} />
          <div className="row">
            <div className="project">
              <h2>
                <a href="/detail/personal-website-v2">
                  <span className="project__title">This website!</span>
                </a>
              </h2>
              <p>
                I wanted to use Node and React on a personal side project because I thought it would be cool. Also, the burden of maintenance of my previous Drupal site was too high.
              </p>
              <a href="https://github.com/timothy-b/personal-website-v2">GitHub</a>
            </div>
            <div style={{marginBottom: "1em", backgroundColor: "#2b3e50"}} />
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
                Last updated: Nov 9 2016
              </p>
            </div>
            <div style={{marginBottom: "1em", backgroundColor: "#2b3e50"}} />
          </div>
        </div>
        <div className="App-footer">
          <p>
            <a href="mailto:tim@timothy-b.com">tim@timothy-b.com</a>&emsp;|&emsp;
            <a href="http://timothy-b.com/downloads/TGB_Resume.pdf">Resume</a>&emsp;|&emsp;
            <a href="https://www.linkedin.com/in/timothy-baumgartner-759b7b123"><img src={linkedinLogo} className="App-linkedinLogo" /></a>&emsp;|&emsp;
            <a href="https://github.com/timothy-b"><img src={githubLogo} className="App-githubLogo"/><img src={githubImage} /></a>&emsp;|&emsp;
            Powered by React<img src={reactLogo} className="App-reactLogo" alt="reactLogo" /> 
          </p>
        </div>
      </div>
    );
  }
}

export default App;
