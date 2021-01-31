import React from "react";

function Project({ project }) {
  const { name, description, link, repo } = project;
  return (
    <div className="project" key={name}>
      <img
        src={require(`../../assets/projects/expense-tracker.jpg`).default}
        alt={name}
        className="project-img"
      />
      <div className="project-detail">
        <h3>
          <a href={link}>link to be here...</a>
          <a href={repo}>repo to be here...</a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Project;
