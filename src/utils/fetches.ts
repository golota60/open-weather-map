import { WeatherDataInterface } from "./weatherApiInterfaces";

const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;

export const getWeatherData = async (city: string): Promise<WeatherDataInterface> => {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&units=metric&appid=${apiKey}`
    );
    const data = await response.json();
    if (response.status >= 400) throw new Error(data.errors);
    return data;
  } catch (err) {
    console.error(err);
  }
  return Promise.reject();
};
