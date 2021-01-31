import React from "react";

function Project({ project }) {
  const { name, description, link, repo } = project;
  return (
    <div className="project col-lg-4 col-sm-6" key={name}>
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
        <p>{description}</p>
      </div>
    </div>
  );
}
export default Project;
