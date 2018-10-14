import React, { Fragment } from 'react';

const About = () =>
  <Fragment>
    <div className="row" id="headerRow">
      <a href="/" className="menu__breadcrumb">Home</a>
      <a href="/about" className="menu__link">About</a>
    </div>
    <div className="spaceRow" />
    <div className="row">
      <div className="project">
        <h2>
          <span className="project__title">About</span>
        </h2>
        <p>
          I'm employed at Faithlife where I work on a broad variety of projects, including data collection, pipelining, warehousing, analysis, reporting, and visualization.
          I'm currently interested in figuring out how to build self-storage and self-serve data reporting solutions to automate most of my responsibilities so that I can focus on other important initiatives.
        </p>
      </div>
    </div>
    <div className="spaceRow" />
  </Fragment>;

export default About;
