import React, { Fragment } from 'react';
import Project from '../components/project';

const About = () =>
  <Fragment>
    <div className="row" id="headerRow">
      <a href="/" className="menu__breadcrumb">Home</a>
      <a href="/about" className="menu__link">About</a>
    </div>
    <div className="spaceRow" />
    <Project
      title="About Me"
      body={(
        <p>
          I'm employed at <a href="https://faithlife.com/about">Faithlife</a> where I work on a broad variety of projects, including data collection, pipelining, warehousing, analysis, reporting, and visualization.
          I'm currently interested in figuring out how to build self-storage and self-serve data reporting solutions to automate most of my responsibilities so that I can focus on other important initiatives.
        </p>
      )} />
  </Fragment>;

export default About;
