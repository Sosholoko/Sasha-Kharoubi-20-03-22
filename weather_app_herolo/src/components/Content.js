import "../style/content.css";

import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchWeather } from "../actions/fetchWeather";

function Content(props) {
  const [city, setCity] = useState("");
  const [celsius, setCelsius] = useState(true);
  const [selectedCity, setSelectedCity] = useState("");

  const weatherSelector = useSelector((state) => state);

  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  useEffect(() => {
    getWeatherInfoAction("Tel Aviv");
  }, []);

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("Error, no city ");
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherInfo);
    }
  };

  const toggleDegree = () => {
    setCelsius((prevState) => !prevState);
  };

  let arr = [];

  const favoriteCity = () => {
    debugger;
    let newCity = weatherSelector.weatherInfo.location.name;
    arr = [...arr, newCity];
  };

  let details = "";

  if (weatherSelector.weatherInfo && weatherSelector.weatherInfo.hasOwnProperty("location")) {
    details = (
      <div className="details">
        <div className="weather_text">
          <div className="city_tempa">
            <p className="city_name">
              {weatherSelector.weatherInfo.location.name}, {weatherSelector.weatherInfo.location.country}
            </p>
            <br />
            {celsius === false && <p className="city_temp">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10}c°</p>}
            {celsius === true && <p className="city_temp">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10}c°</p>}
            <br />
            <br />
            <button className="toggle_btn" onClick={toggleDegree}>
              C°/F°
            </button>
          </div>
          <div className="weather_icon">
            <img className="city_icon" src={weatherSelector.weatherInfo.current.condition.icon} />
            <p className="city_text">{weatherSelector.weatherInfo.current.condition.text}</p>
          </div>
          <div className="fav">
            <button className="fav_btn" onClick={favoriteCity}>
              Add to Favorite
            </button>
          </div>
        </div>
        <br />

        <div className="weather_forecast">
          <div className="card_1">
            <p>Monday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 + 2}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 + 2}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
          </div>
          <div className="card_2">
            <p>Tuesday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 - 3}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 - 3}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_3">
            <p>Wednesday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 + 1}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 + 1}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_4">
            <p>Thursday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 - 4}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 - 4}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_5">
            <p>Friday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 + 3}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 + 3}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/176.png" />
          </div>
          <div className="card_6">
            <p>Saturday</p>
            {celsius === false && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_f * 10) / 10 - 1}c°</p>}
            {celsius === true && <p className="city_tempC">{Math.round(weatherSelector.weatherInfo.current.temp_c * 10) / 10 - 1}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
          </div>
        </div>
      </div>
    );
  } else {
    details = <p>The city you looked for doesn't exist ! Please try something else</p>;
  }
  return (
    <Fragment>
      {props.home && (
        <div>
          <form onSubmit={getWeatherInfo}>
            <div className="control">
              <input
                className="search_field"
                type="text"
                name="name"
                placeholder="Search for a City"
                onChange={(e) => setCity(e.target.value)}
              ></input>
              <br />
              <input className="search_btn" type="submit" value="Check Weather" />
            </div>
          </form>
          {details}
        </div>
      )}
      {props.fav && (
        <Fragment>
          <h1>Favorite Page</h1>
          <p></p>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Content;
