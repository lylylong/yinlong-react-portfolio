import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import Resume from "../Resume";
import { titleCase } from "../../utils/helper";

function Page({ currentPage }) {
  // switch all pages
  const contentRender = () => {
    switch (currentPage.name) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      default:
        return <About />;
    }
  };

  // {contentRender()}

  return (
    <section>
      <h2>{titleCase(currentPage.name)}</h2>
      <PageContent>{contentRender()}</PageContent>
    </section>
  );
}
export default Page;
