import React from "react";
// the header is on everypage
function Header(props) {
  return (
    <header className="flex-row px-1 space-between blog-header py-3 app-header">
      <h1 className="row flex-nowrap justify-content-between align-items-center">
        Yin Long Portfolio
      </h1>
      {props.children}
    </header>
  );
}
export default Header;
