import React from "react";

function Header(props) {
  return (
    <header className="flex-row px-1 space-between">
      <h1>Yin Long Portfolio</h1>
      {props.children}
    </header>
  );
}
export default Header;
