const API_KEY = "e0e3b128ffe44055ac5113828222003";
const API_HOST = "http://api.weatherapi.com/";
const API_VERSION = "v1";

export function fetchWeather(city) {
  return function (dispatch) {
    fetch(`${API_HOST}${API_VERSION}/current.json?key=${API_KEY}&q=${city}&aqi=no/`, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin"
    })
      .then((res) => {
        return res.json();
      })
      .then((JSONres) => {
        dispatch({ type: "FETCH_WEATHER", payload: JSONres });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
