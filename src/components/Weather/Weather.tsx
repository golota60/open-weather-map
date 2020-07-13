import React, { useState } from 'react';
import './Weather.scss';
import { WeatherDataInterface } from '../../utils/weatherApiInterfaces';
import { getWeatherData } from '../../utils/fetches';
import WeatherDay from '../WeatherDay/WeatherDay';
import TextInput from '../common/TextInput/TextInput';
import Button from '../common/Button/Button';

const Weather = () => {
  const [weatherData, setWeatherData] = useState<WeatherDataInterface>();
  const [city, setCity] = useState('Wroclaw');

  const handleButtonClick = async () => {
    const data = await getWeatherData(city);
    setWeatherData(data);
  };

  return (
    <div className="weather">
      <h3>Input City</h3>
      <TextInput value={city} onChange={(e) => setCity(e.target.value)} />
      <Button onClick={handleButtonClick} className="weather__search-button">Fetch</Button>
      {weatherData ? (
        <>
          <h4>Showing weather for: {weatherData.city.name}</h4>
          <div className="weather-daily__wrapper">
            {weatherData.list.map((_weatherElem) => (
              <WeatherDay
                key={_weatherElem.dt}
                weather={_weatherElem}
                className="weather-daily"
              />
            ))}
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Weather;
