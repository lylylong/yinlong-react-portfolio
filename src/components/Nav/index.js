import React, { useEffect } from "react";
import { titleCase } from "../../utils/helper";
// the nav is on everypage
function Nav(props) {
  // use props
  const { pages = [], currentPage, setCurrentPage } = props;
  // change the title name when stwiching the page
  useEffect(() => {
    document.title = "Yin - " + titleCase(currentPage.name);
  }, [currentPage]);

  return (
    <nav className="nav-scroller py-1 nav-bar">
      <ul className="flex-row">
        {pages.map((page) => (
          <li
            className={`mx-2 ${currentPage.name === page.name && "navActive"}`}
            key={page.name}
          >
            <span onClick={() => setCurrentPage(page)}>
              {titleCase(page.name)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
