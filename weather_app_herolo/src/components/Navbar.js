import React, { Fragment, useState } from "react";
import Content from "./Content";
import "../style/navbar.css";

function Navbar() {
  const [home, setHome] = useState(true);
  const [fav, setFav] = useState(false);

  function togglePage() {
    setHome((prevState) => !prevState);
    setFav((prevState) => !prevState);
  }
  return (
    <Fragment>
      <div className="nav_container">
        <h1>Herolo Weather App</h1>
        <div className="links">
          <button onClick={togglePage}>Home</button>
          <button onClick={togglePage}>Favorites</button>
        </div>
      </div>
      <Content home={home} fav={fav} />
    </Fragment>
  );
}

export default Navbar;
