import React, { Component } from 'react';
import About from './pages/about.jsx';
import Detail from './pages/detail.jsx';
import Home from './pages/home.jsx';
import githubLogo from './images/GitHub_Logo_White.png';
import githubImage from './images/GitHub-Mark-Light-32px.png';
import linkedinLogo from './images/LinkedIn_Logo_White.png';
import reactLogo from './images/reactLogo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  constructor(props){
    super(props);

    const urlComponents = window.location.href.split('/');
    const topLevelRoute = urlComponents[3];
    const remainingUrlComponents = urlComponents.slice(4);

    this.state = { topLevelRoute, remainingUrlComponents };
  }

  render() {
    const { topLevelRoute, remainingUrlComponents } = this.state;

    let component = <Home />;
    if (routeMap.hasOwnProperty(topLevelRoute.toLowerCase()))
      component = routeMap[topLevelRoute.toLowerCase()](remainingUrlComponents);

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
            <a href="https://www.linkedin.com/in/timothy-baumgartner-759b7b123"><img src={linkedinLogo} className="logo-linkedin" alt="logo-linkedin" /></a>&emsp;|&emsp;
            <a href="https://github.com/timothy-b"><img src={githubLogo} className="logo-github" alt="logo-react"/><img src={githubImage} alt="githubImage" /></a>&emsp;|&emsp;
            Powered by <a href="https://reactjs.org/">React <img src={reactLogo} className="logo-react" alt="logo-react" /></a>
          </p>
        </div>
      </div>
    );
  };
}

const routeMap = {
  "about": () => <About />,
  "detail": (remainingUrlComponents) => <Detail remainingUrlComponents={remainingUrlComponents} />
};

export default App;
