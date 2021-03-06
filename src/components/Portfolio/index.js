import React, { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // all projects
  const [projects] = useState([
    {
      name: "moviegoer",
      description: "MERN stack/PWA/SPA Project",
      link: "https://moviegoer-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/moviegoer.git",
    },
    {
      name: "cake-app",
      description: "Model-View-Controller Project",
      link: "https://cake-lab-app.herokuapp.com/",
      repo: "https://github.com/lylylong/cake-app",
    },
    {
      name: "COVID-19-Tracker",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/COVID-19-Tracker/",
      repo: "https://github.com/lylylong/COVID-19-Tracker",
    },
    {
      name: "work-time-planner",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/work-time-planner/",
      repo: "https://github.com/lylylong/work-time-planner.git",
    },
    {
      name: "expense-tracker",
      description: "Node.js/express/mongoDB Project",
      link: "https://expense-tracker-2021.herokuapp.com/",
      repo: "https://github.com/lylylong/expense-tracker.git",
    },
    {
      name: "my-weather-channel",
      description: "JaveScript/CSS/HTML Project",
      link: "https://lylylong.github.io/my-weather-channel/",
      repo: "https://github.com/lylylong/my-weather-channel.git",
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, i) => (
          <Project project={project} key={("project", i)} />
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
