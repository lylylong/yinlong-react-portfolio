import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  // initial page title name
  document.title = "Yin Long";
  // all page options
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "resume" },
    { name: "contact" },
  ]);
  // set the initial page -- About me
  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="container-flood">
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
