import React from "react";

function Nav(props) {
  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          Yin Long Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
