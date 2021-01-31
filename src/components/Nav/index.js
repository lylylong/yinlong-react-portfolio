import React, { useEffect } from "react";
import { titleCase } from "../../utils/helper";

function Nav(props) {
  const { pages = [], currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = "Yin - " + titleCase(currentPage.name);
  }, [currentPage]);

  return (
    <nav>
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
