const OPEN_WEATHER_APP_ID = 'b986c94f16c52b4260a7575d3433d1fd';
const URLs = {
  GET_WEATHER_DETAILS_BY_LOCATION: `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=${OPEN_WEATHER_APP_ID}&units=imperial`,
  GET_WEATHER_DETAILS_BY_CITY_ID: `https://api.openweathermap.org/data/2.5/weather?id={city_id}&appid=${OPEN_WEATHER_APP_ID}&units=imperial`,
};

export default URLs;