import React, { Component } from 'react';
import Detail from './pages/Detail/index.jsx';
import Home from './pages/Home/index.jsx';
import githubLogo from './GitHub_Logo_White.png';
import githubImage from './GitHub-Mark-Light-32px.png';
import linkedinLogo from './LinkedIn_Logo_White.png';
import reactLogo from './reactLogo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);

    const urlComponents = window.location.href.split('/');
    const topLevelRoute = urlComponents[3];
    const remainingUrlComponents = urlComponents.slice(4);
    console.log(remainingUrlComponents);

    this.state = { topLevelRoute, remainingUrlComponents };
  }

  render() {
    const { topLevelRoute, remainingUrlComponents } = this.state;

    let component = <Home />;
    if (topLevelRoute.toLowerCase() === "detail")
      component = <Detail remainingUrlComponents={remainingUrlComponents} />;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Timothy Baumgartner</h1>
          <i>Software Developer</i>
        </header>
        <div className="container">
        {component}
        </div>
        <div className="App-footer">
          <p>
            <a href="mailto:tim@timothy-b.com">tim@timothy-b.com</a>&emsp;|&emsp;
            <a href="http://timothy-b.com/downloads/TGB_Resume.pdf">Resume</a>&emsp;|&emsp;
            <a href="https://www.linkedin.com/in/timothy-baumgartner-759b7b123"><img src={linkedinLogo} className="linkedinLogo" alt="linkedinLogo" /></a>&emsp;|&emsp;
            <a href="https://github.com/timothy-b"><img src={githubLogo} className="githubLogo" alt="githubLogo"/><img src={githubImage} alt="githubImage" /></a>&emsp;|&emsp;
            Powered by React<img src={reactLogo} className="reactLogo" alt="reactLogo" />
          </p>
        </div>
      </div>
    );
  };
}

export default App;
