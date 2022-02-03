import { WEATHER_API_KEY } from "../config";

export const getWeatherByLocation = async (location) => {
  return await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${location}&aqi=no`
  )
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    });
};
