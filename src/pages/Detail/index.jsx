import React, { Fragment } from 'react';
import apacheLogo from '../../Apache_server.png';
import nodeLogo from '../../nodejs-new-pantone-white.png';
import reactLogo from '../../reactLogo.svg';
import staScreenshot from '../../STA_app_screenshot_0.png';

const Detail = ({remainingUrlComponents}) => {
  
  const component = routeMap.hasOwnProperty(remainingUrlComponents[0])
    ? routeMap[remainingUrlComponents[0]]
    : <h1 style={{color: "white"}}>404</h1>; // TODO: return home

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

const personalWebsiteV2 =
  <div className="project">
    <h2>
      <span className="project__title">This Website!</span>
    </h2>
    <p>
      In school I used Apache, PHP, and jQuery. At work I use IIS, .NET MVC, ASP.NET, and React. I thought it would be fun to use Apache, Node, and React, and I wasn't a fan of my previous homepage's setup with Drupal, so I decided to start working on this site as a side project.
    </p>
    <img src={apacheLogo} className="apacheLogo" alt="Apache Logo" />&emsp;<img src={nodeLogo} className="nodeLogo" alt="Nodejs Logo" /><img src={reactLogo} className="reactLogo" alt="React Logo" style={{height: "60px"}} />
  </div>;

const spokaneTransitApp =
  <div className="project">
    <h2>
      <span className="project__title">Unofficial Spokane Transit Authority Companion App</span>
    </h2>
    <div className="row" style={{width: "100%"}}>
      <div className="col-6" style={{float: "left"}}>
      <img src={staScreenshot} className="staScreenshot" alt="STA screenshot" />
      </div>
      <div className="col-6" style={{float: "right"}}>
        <p>
          A classmate and I thought it would be cool to build a better <a href="https://spokanetransit.com">spokanetransit.com</a> after hearing a long list of its flaws from professor and long-time STA rider Brian Kamp.
          This project involved full stack web development: Apache, PHP, JavaScript, jQuery, HTML5,&nbsp;CSS3, and a lot of building and interacting with RESTful web APIs.
          Route and stop data provided by <a href="https://transit.land">transit.land</a>, map and place data by <a href="https://developers.google.com/maps/">Google</a>.
        </p>
      </div>
    </div>
    <div className="spaceRow" />
  </div>;

const routeMap = {
  "personal-website-v2": personalWebsiteV2,
  "spokane-transit-app": spokaneTransitApp
}

export default Detail;
