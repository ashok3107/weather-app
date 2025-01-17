import { LocationItemType } from "../components/LocationListItem";
import { CURR_LOCATION } from "../constants/AppConstants";

export const getFormattedWeatherDetails = (weatherData: any) : LocationItemType => {
  const {
    weather, main, wind, sys, name, coord, id, timezone,
  } = weatherData;
  const {
    temp, temp_min: tempMin, temp_max: tempMax, feels_like: feelsLikeTemp, humidity, pressure,
  } = main;
  const { speed: windSpeed } = wind;
  const { country, sunrise, sunset } = sys;
  const { icon, description } = weather[0];
  const { lon, lat } = coord;
  const formattedObj = {
    name,
    temp,
    tempMin,
    tempMax,
    feelsLikeTemp,
    humidity,
    pressure,
    windSpeed,
    country,
    sunrise,
    sunset,
    icon,
    lon,
    lat,
    description,
    id,
    timezone,
  };
  return formattedObj;
};

export const getWeatherIcon = (icon: string): string => `https://openweathermap.org/img/wn/${icon}@2x.png`;

export const getFormattedTimeFromEpoch = (epoch: number, timezone: number = 0): string => {
  const date = new Date((epoch + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  return `${hours > 12 ? hours - 12 : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${hours < 12 ? 'AM': 'PM'}`;
}

export const isSameLocation = (lat: number, lon: number) => lat.toString() === CURR_LOCATION.lat.toFixed(4) && lon.toString() === CURR_LOCATION.lon.toFixed(4);