import "../style/fav.scss";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/fetchWeather";
import React, { Fragment, useState } from "react";

function Favorites(props) {
  //   const weatherSelector = useSelector((state) => state);

  //   const dispatch = useDispatch();
  //   const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  return (
    <Fragment>
      <h1>Favorites City</h1>
      <div className="fav_group">
        {props.favCity.map((favCity) => {
          return (
            <div className="favCard">
              <p key={favCity}>{favCity}</p>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
}

export default Favorites;
