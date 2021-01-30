import React from "react";

function Header(props) {
  return (
    <header className="flex-row px-1 space-between">
      <h1>
        <a data-testid="link" href="/">
          Yin Long Portfolio
        </a>
      </h1>
      {props.children}
    </header>
  );
}
export default Header;
