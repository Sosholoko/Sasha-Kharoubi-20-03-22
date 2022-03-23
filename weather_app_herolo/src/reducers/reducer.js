import { combineReducers } from "redux";
import { weatherInfo } from "./weatherReducer";

const reducers = combineReducers({
  WeatherInfo: weatherInfo
});

export default reducers;
