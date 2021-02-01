import React from "react";
import { titleCaseRemoveHyphen } from "../../utils/helper";
// each project
function Project({ project }) {
  const { name, description, link, repo } = project;
  return (
    <div className="project col-lg-4 col-sm-6" key={name}>
      <p className="mt-3 project-title">{titleCaseRemoveHyphen(name)}</p>
      <img
        src={require(`../../assets/projects/${name}.jpg`).default}
        alt={name}
        className="project-img"
      />
      <div className="project-detail text-left">
        <p>
          <i className="fas fa-globe"></i>
          <a
            className="project-info"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            URL{" "}
          </a>
          <i className="fab fa-github"></i>
          <a
            className="project-info"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Repo
          </a>
        </p>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
}
export default Project;
