import "../style/fav.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/fetchWeather";
import React, { Fragment, useState } from "react";

function Favorites(props) {
  const delFav = (e) => {
    const delCity = props.favCity.indexOf(props.favCity[0]);
    if (delCity > -1) {
      props.favCity.splice(delCity, 1);
    }
  };

  return (
    <Fragment>
      <h1>Favorites City ({props.favCity.length})</h1>
      <div className="fav_group">
        {props.favCity.length > 0 ? (
          props.favCity.map((favCity) => {
            return (
              <div className="favCard">
                <button className="del_btn" onClick={(e) => delFav()}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
                <p className="fav_city" key={favCity}>
                  {favCity.location.name}
                </p>
                <p className="fav_temp" key={favCity}>
                  {favCity.current.temp_c}c°
                </p>
              </div>
            );
          })
        ) : (
          <div className="div_err">
            <h2 className="err_msg">
              ⚠︎ You don't have any favorites for now. You can add new locations by clicking the "Add" button next to the chosen city.
            </h2>
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default Favorites;
