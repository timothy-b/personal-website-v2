import React, { Fragment } from 'react';
import Project from "../components/project.jsx";

const Home = () => (
  <Fragment>
    <div className="row" id="headerRow">
          <h3 className="projects__header">Selected Projects</h3>
          <a href="/about" className="menu__link">About</a>
        </div>
    <div className="spaceRow" />
    <Project
      aboutPageLink="/detail/personal-website-v2"
      title="This website!"
      body={(
        <Fragment>
          <p>
            I thought it would be fun to use React and Node in a side project, and here it is!
          </p>
          <a href="https://github.com/timothy-b/personal-website-v2">GitHub</a>
        </Fragment>
      )} />
    <Project 
      aboutPageLink="/detail/iot-sec"
      title="IOT Home Security"
      body={(
        <Fragment>
          <p>
            A basic IOT security system using a Particle Photon and a Raspberry Pi.
          </p>
          <a href="https://github.com/timothy-b/iot-sec">GitHub</a>
        </Fragment>
      )} />
    <Project
      aboutPageLink="/detail/spokane-transit-app"
      title="Unofficial Spokane Transit Authority Companion App"
      body={(
        <Fragment>
          <p>
            An abandoned project to compete with <a href="https://spokanetransit.com">spokanetransit.com</a>.<br />
            Last updated: 9 Nov 2016
          </p>
          <a href="https://github.com/cstaaben/transit-webApp">GitHub</a> | <a href="http://timothy-b.com/transit-webApp/busForm.html">see it live</a>
        </Fragment>
      )} />
  </Fragment>
);

export default Home;
