import React, {Fragment} from 'react';

const Project = ({aboutPageLink, title, body}) => {
  return (
    <div className="project">
      <h2>
        <a href={aboutPageLink}>
          <span className="project__title">{title}</span>
        </a>
      </h2>
      {body}
    </div>
  );
}

const ProjectRow = ({aboutPageLink, title, body}) => {
  return (
    <Fragment>
      <div className="row">
        <Project
          aboutPageLink={aboutPageLink}
          title={title}
          body={body} />
      </div>
      <div className="spaceRow" />
    </Fragment>
  );
}

export default ProjectRow;
