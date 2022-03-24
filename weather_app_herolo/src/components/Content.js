import "../style/content.scss";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../actions/fetchWeather";
import Swal from "sweetalert2";

function Content(props) {
  const [city, setCity] = useState("");
  const [input, setInput] = useState("");
  const [celsius, setCelsius] = useState(true);
  const [loading, setLoading] = useState(true);
  const [selectedCity, setSelectedCity] = useState();

  const weatherSelector = useSelector((state) => state);

  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  useEffect(() => {
    setLoading(true);
    getWeatherInfoAction("Tel Aviv");
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (props.dark === true) {
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
    }
  }, [props.dark]);

  const clearValue = () => {
    setInput("");
  };

  const getError = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "No city to look for ! Try again"
    });
  };

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      getError();
    } else {
      getWeatherInfoAction(city);
      console.log(weatherSelector.weatherInfo);
    }
  };

  const toggle = document.querySelector(".toggle-inner2");
  const body = document.body;

  const toggleDegree = () => {
    setCelsius((prevState) => !prevState);
    if (celsius === true) {
      toggle.classList.add("toggle-active");
      body.classList.add("cel-mode");
    } else {
      body.classList.remove("cel-mode");
      toggle.classList.remove("toggle-active");
    }
  };

  let arr = [];

  const favoriteCity = (newCity) => {
    debugger;
    arr = [...arr, newCity];
    setSelectedCity(arr);

    let timerInterval;
    Swal.fire({
      title: "Added to Favorite ♡",
      icon: "success",
      html: "This location have been added to your favorite !",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        timerInterval = setInterval(() => {}, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
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
            {celsius === false && <p className="city_temp">{weatherSelector.weatherInfo.current.temp_f.toFixed(1)} F°</p>}
            {celsius === true && <p className="city_temp">{weatherSelector.weatherInfo.current.temp_c.toFixed(1)}c°</p>}
            <div className="toggle_group">
              <p>C°/F°</p>
              <div id="toggle2" onClick={toggleDegree}>
                <div className="toggle-inner2" />
              </div>
            </div>
          </div>
          <div className="weather_icon">
            <img className="city_icon" src={weatherSelector.weatherInfo.current.condition.icon} />
            <p className="city_text">{weatherSelector.weatherInfo.current.condition.text}</p>
          </div>
          <div className="fav">
            <button className="fav_btn" onClick={() => favoriteCity(weatherSelector.weatherInfo.location.name)}>
              Add to Favorite <i class="fa-solid fa-heart"></i>
            </button>
          </div>
        </div>
        <br />

        <div className="weather_forecast">
          <div className="card_1">
            <p>Monday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f + 2).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c + 2).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
          </div>
          <div className="card_2">
            <p>Tuesday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f - 3).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c - 3).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_3">
            <p>Wednesday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f + 1).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c + 1).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_4">
            <p>Thursday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f - 4).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c - 4).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/122.png" />
          </div>
          <div className="card_5">
            <p>Friday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f + 3).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c + 3).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/176.png" />
          </div>
          <div className="card_6">
            <p>Saturday</p>
            {celsius === false && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_f - 1).toFixed(1)} F°</p>}
            {celsius === true && <p className="city_tempC">{(weatherSelector.weatherInfo.current.temp_c - 1).toFixed(1)}c°</p>}
            <img className="city_iconC" src="//cdn.weatherapi.com/weather/64x64/day/113.png" />
          </div>
        </div>
      </div>
    );
  } else if (loading === false) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "The city you searched for is invalid ! Please try something else",
      confirmButtonColor: "rgb(209, 92, 92)"
    }).then(function () {
      setLoading(true);
      getWeatherInfoAction("Tel Aviv");
      setTimeout(() => {
        setLoading(false);
      }, 800);
    });
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
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  setCity(e.target.value);
                }}
              ></input>
              <input className="search_btn" type="submit" value="Check Weather  →" onClick={clearValue} />
            </div>
          </form>
          {details}
        </div>
      )}
      {props.fav && (
        <Fragment>
          <h1>Favorite Page</h1>
          <p>{selectedCity}</p>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Content;
