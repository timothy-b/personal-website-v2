import React from 'react';

const ProjectTwoColumns = ({detailPageLink, title, left, right, footer}) => {
  const titleContent = detailPageLink
    ? (<h2>
        <a href={detailPageLink}>
          <span className="project__title projectTwoColumns__header">{title}</span>
        </a>
      </h2>)
    : (<h2 className="project__title projectTwoColumns__header">{title}</h2>)

  return (
    <div className="project projectTwoColumns">
      {titleContent}
      <div className="projectTwoColumns__left">
        {left}
      </div>
      <div className="projectTwoColumns__right">
        {right}
      </div>
      <div className="projectTwoColumns__footer">
        {footer}
      </div>
      <div className="spaceRow"></div>
    </div>
  );
}

export default ProjectTwoColumns;
