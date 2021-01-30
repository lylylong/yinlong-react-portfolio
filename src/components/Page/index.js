import React from "react";
import PageContent from "../PageContent";
import About from "../About";
import { titleCase } from "../../utils/helper";

function Page(allPages) {
  // switch all pages
  const contentRender = () => {
    switch (allPages) {
      case "about me":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      case "resume":
        return <Resume />;
    }
  };

  // {contentRender()}

  return (
    <section>
      <h2>{titleCase("page title")}</h2>
      <PageContent>{contentRender()}</PageContent>
    </section>
  );
}
export default Page;
