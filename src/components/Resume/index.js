import React from "react";

function Resume() {
  return (
    <section className="row resume-box">
      <div className="col-3 float-left resume-btn">
        <button className="btn h-10">
          {" "}
          <i className="fas fa-file-download"></i>
          <a
            className="download"
            href="../../assets/download/LY-resume.pdf"
            download
          >
            {" "}
            My resume{" "}
          </a>
        </button>
      </div>

      <div className="col-4">
        <div>
          <h4 className="mb-3">Front-End Skills:</h4>
          <ul className="skills">
            <li>JavaScript</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>jQuery</li>
            <li>Bootstrap</li>
          </ul>
        </div>
      </div>
      <div className="col-4">
        <div>
          <h4 className="mb-3">Back-End Skills:</h4>
          <ul className="skills">
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Resume;
