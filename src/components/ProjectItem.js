import React from "react";

function ProjectItem({ name, about, technologies }) {
  const technologiesShown = technologies.map((item)=> <span key={item}>{item}</span>)
  return (
    <div className="project-item">
      <h3 key="name">{name}</h3>
      <p key="about">{about}</p>
      <div className="technologies">
        {technologiesShown}
      </div>
    </div>
  );
}

export default ProjectItem;
