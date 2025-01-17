import axios from "axios";
import URLs from "./constants/URLs";

export const getWeatherDataByLocation = (lat: number, lon: number) => axios.get(URLs.GET_WEATHER_DETAILS_BY_LOCATION.replace('{lat}', lat.toString()).replace('{lon}', lon.toString()));
export const getWeatherDataByCityId = (cityId: number) => axios.get(URLs.GET_WEATHER_DETAILS_BY_CITY_ID.replace('{city_id}', cityId.toString()));
