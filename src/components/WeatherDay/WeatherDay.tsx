import React, { useState } from 'react';
import './WeatherDay.scss';
import {
  WeatherDataInterface,
  WeatherForecastInterface,
} from '../../utils/weatherApiInterfaces';

interface WeatherBlockProps {
  weather: WeatherForecastInterface;
  className?: string;
}

const parseDate = (date: number) => new Date(Number.parseInt(`${date}000`)).toString().substring(15,25)

const WeatherDay = ({ weather, className = '' }: WeatherBlockProps) => {
  return (
    <div className={`weather-day ${className}`}>
      <span className="weather-day__elem">
        Time
        <p className="weather-day__elem-property">{parseDate(weather.dt)}</p>
      </span>
      <span />
      <span className="weather-day__elem">
        Temperature
        <p className="weather-day__elem-property">{weather.main.temp}&#176;C</p>
      </span>
      <span className="weather-day__elem">
        Humidity
        <p className="weather-day__elem-property">{weather.main.humidity}%</p>
      </span>
      <span className="weather-day__elem">
        Max Temperature
        <p className="weather-day__elem-property">
          {weather.main.temp_max}&#176;C
        </p>
      </span>
      <span className="weather-day__elem">
        Min Temperature
        <p className="weather-day__elem-property">
          {weather.main.temp_min}&#176;C
        </p>
      </span>
    </div>
  );
};

export default WeatherDay;
