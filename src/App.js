// import logo from "./logo.svg";
// import "./App.css";
import React, { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" },
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header>
        <Nav
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        ></Nav>
      </Header>
    </div>
  );
}

export default App;
