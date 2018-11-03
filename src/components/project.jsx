import React from 'react';

const Project = ({detailPageLink, title, body, footer}) => {
  const titleContent = detailPageLink
    ? (<h2>
        <a href={detailPageLink}>
          <span className="project__title">{title}</span>
        </a>
      </h2>)
    : (<h2 className="project__title">{title}</h2>)

  return (
    <div className="project">
      {titleContent}
      <div className="project__body">
        {body}
      </div>
      <div className="project__footer">
        {footer}
      </div>
      <div className="spaceRow"></div>
    </div>
  );
}

export default Project;
