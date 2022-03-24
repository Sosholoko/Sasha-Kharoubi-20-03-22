import React, { Fragment, useState, useEffect } from "react";
import Content from "./Content";
import "../style/navbar.scss";

function Navbar(props) {
  const [home, setHome] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (props.dark === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [props.dark]);

  function togglePage() {
    setHome((prevState) => !prevState);
    setFav((prevState) => !prevState);
  }
  return (
    <Fragment>
      <div className="nav_container">
        <h1>
          Herolo Weather App <i class="fa-solid fa-cloud-sun"></i>
        </h1>
        <div className="links">
          <button onClick={togglePage}>
            <i class="fa-solid fa-house"></i> Home
          </button>
          <button onClick={togglePage}>
            <i class="fa-solid fa-heart-circle-check"></i> Favorites
          </button>
        </div>
      </div>
      <Content home={home} fav={fav} dark={props.dark} />
    </Fragment>
  );
}

export default Navbar;
