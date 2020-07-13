import React, { useEffect, useState } from "react";
import "./App.scss";
import { getWeatherData } from "../utils/fetches";
import WeatherDay from "./WeatherDay/WeatherDay";
import { WeatherDataInterface } from "../utils/weatherApiInterfaces";
import Weather from "./Weather/Weather";

const App = () => {
  return (
    <div className="App">
      <Weather />
    </div>
  );
};
export default App;
