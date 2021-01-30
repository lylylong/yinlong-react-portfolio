import React, { useEffect } from "react";

function Nav(props) {
  const { pages = [], currentPage, setCurrentPage } = props;

  useEffect(() => {
    document.title = currentPage.name;
  }, [currentPage]);

  return (
    <nav>
      <ul className="flex-row">
        {pages.map((page) => (
          <li
            className={`mx-2 ${currentPage.name === page.name && "navActive"}`}
            key={page.name}
          >
            <span onClick={() => setCurrentPage(page)}>{page.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
