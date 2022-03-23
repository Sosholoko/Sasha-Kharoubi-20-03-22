import "./App.scss";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (darkMode === true) {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [darkMode]);

  return (
    <div className="App">
      <div id="toggle" onClick={() => (darkMode === false ? setDarkMode(true) : setDarkMode(false))}>
        <div className="toggle-inner" />
      </div>
      <Navbar dark={darkMode} />
      <br />
    </div>
  );
}

export default App;
