import React, { Fragment, useState, useEffect } from "react";
import Content from "./Content";
import "../style/navbar.scss";

function Navbar(props) {
  const [home, setHome] = useState(true);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const toggle = document.querySelector(".toggle-inner");
    if (props.dark === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [props.dark]);

  const body = document.body;

  function togglePage() {
    setHome((prevState) => !prevState);
    setFav((prevState) => !prevState);
    const btnH = document.querySelector(".btn_home");
    const btnF = document.querySelector(".btn_fav");
    const body = document.body;
    if (home) {
      body.classList.remove("home-mode");
      body.classList.add("fav-mode");
    } else {
      body.classList.remove("fav-mode");
      body.classList.add("home-mode");
    }
  }
  return (
    <Fragment>
      <div className="nav_container">
        <h1>
          Herolo Weather App <i class="fa-solid fa-cloud-sun"></i>
        </h1>
        <div className="links">
          <button className="btn_home" onClick={togglePage}>
            <i class="fa-solid fa-house"></i> Home
          </button>
          <button className="btn_fav" onClick={togglePage}>
            <i class="fa-solid fa-heart-circle-check"></i> Favorites
          </button>
        </div>
      </div>
      <Content home={home} fav={fav} dark={props.dark} />
    </Fragment>
  );
}

export default Navbar;
