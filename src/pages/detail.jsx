import React, { Fragment } from 'react';
import apacheLogo from '../Apache_server.png';
import nodeLogo from '../nodejs-new-pantone-white.png';
import reactLogo from '../reactLogo.svg';
import staScreenshot from '../STA_app_screenshot_0.png';
import Project from '../components/project';

const Detail = ({remainingUrlComponents}) => {
  
  const component = routeMap.hasOwnProperty(remainingUrlComponents[0])
    ? routeMap[remainingUrlComponents[0]]
    : <h1 style={{color: "white", fontFamily:"\"Lato\", sans-serif" }}>404 File Not Found</h1>; // TODO: return home

  return (
    <Fragment>
      <div className="row" id="headerRow">
          <a href="/" className="menu__breadcrumb">Home</a>
          <a href="/about" className="menu__link">About</a>
        </div>
      <div className="spaceRow" />
      <div className="row">
        {component}
      </div>
      <div className="spaceRow" />
    </Fragment>
  );
}

const iotSec =
  <Project
    title="IOT Home Security"
    body={(
      <p>
      A magnet is attached to a door, with a magnet sensor on the doorframe, which is wired to a Particle Photon, which has a webhook configured to send a message to a Raspberry Pi.
      The Pi scans my WiFi network for my phone. If undetected, it sends me a text message indicating that the door is open.
    </p>
    )}
    footer={(
      <a href="https://github.com/timothy-b/iot-sec">GitHub</a>
    )} />;

const personalWebsiteV2 =
  <Project
    title="This Website!"
    body={(
      <Fragment>
        <p>
          In school I used Apache, PHP, and jQuery. At work I use IIS, .NET MVC, ASP.NET, and React. I thought it would be fun to use Apache, Node, and React, and I wasn't a fan of my previous homepage's setup with Drupal, so I decided to start working on this site as a side project.
        </p>
        <img src={apacheLogo} className="logo-apache" alt="Apache Logo" />&emsp;<img src={nodeLogo} className="logo-node" alt="Nodejs Logo" /><img src={reactLogo} className="logo-react" alt="React Logo" style={{height: "60px"}} />
      </Fragment>
    )}
    footer={(
      <a href="https://github.com/timothy-b/personal-website-v2">GitHub</a>
    )} />

const spokaneTransitApp =
<div className="project projectTwoColumns">
  <h2 className="project__header projectTwoColumns__header">
    Unofficial Spokane Transit Authority Companion App
  </h2>
  <img src={staScreenshot} className="staScreenshot projectTwoColumns__left" alt="STA screenshot" />
  <div className="projectTwoColumns__right">
    <p>
      A classmate and I thought it would be cool to build a better <a href="https://spokanetransit.com">spokanetransit.com</a> after hearing a long list of its flaws from professor and long-time STA rider Brian Kamp.
      This project involved full stack web development: Apache, PHP, JavaScript, jQuery, HTML5,&nbsp;CSS3, and a lot of building and interacting with RESTful web APIs.
      Route and stop data provided by <a href="https://transit.land">transit.land</a>, map and place data by <a href="https://developers.google.com/maps/">Google</a>.
    </p>
  </div>
  <div className="projectTwoColumns__footer">
    <a href="https://github.com/cstaaben/transit-webApp">GitHub</a> | <a href="http://timothy-b.com/transit-webApp/busForm.html">see it live</a>
  </div>
  <div className="spaceRow" />
</div>;

const routeMap = {
  "iot-sec": iotSec,
  "personal-website-v2": personalWebsiteV2,
  "spokane-transit-app": spokaneTransitApp
}

export default Detail;
