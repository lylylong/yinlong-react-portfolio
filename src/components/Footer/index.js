import React from "react";
// the footer is on everypage
function Footer() {
  return (
    <footer className="flex-row px-1">
      <a
        className="mx-2"
        href="https://github.com/lylylong"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
        <p>GitHub</p>
      </a>
      <a
        className="mx-2"
        href="https://www.linkedin.com/in/yin-long/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
        <p>LinkedIn</p>
      </a>
      <a
        className="mx-2"
        href="https://google.ca"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-twitter"></i>
        <p>Twitter</p>
      </a>
    </footer>
  );
}
export default Footer;
