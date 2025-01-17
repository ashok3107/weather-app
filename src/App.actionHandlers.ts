import { ThunkAction } from "redux-thunk";
import { getWeatherDataByCityId, getWeatherDataByLocation } from "./App.services";
import { AnyAction } from "redux";
import { RootState } from "./store";
import ACTION_TYPES from "./App.actionTypes";
import StorageUtility, { StorageKeys } from "./helpers/LocalStorage";
import { getFormattedWeatherDetails } from "./helpers/App.helper";
import { LocationItemType } from "./components/LocationListItem";

type AppAction = ThunkAction<void, RootState, unknown, AnyAction>;

export const setLocalStateToAppStore = (): AppAction => (dispatch) => {
  const selectedCities = StorageUtility.getItem(StorageKeys.SELECTED_CITIES);
  dispatch({ type: ACTION_TYPES.SET_SAVED_LOCATIONS, data: selectedCities });
};

export const getAllWeatherData = (): AppAction => (dispatch, getState) => {
  dispatch({ type: ACTION_TYPES.SET_LOADER, data: true });
  const _getAllData = (position?: GeolocationPosition) => {
    const promises = [];
    const selectedCities = [...(getState().app.selectedLocations || [])];
    if (position) {
      const { latitude, longitude } = position.coords;
      promises.push(getWeatherDataByLocation(latitude, longitude));
    }
    selectedCities.forEach(city => promises.push(getWeatherDataByCityId(city)));
    Promise.all(promises).then((res) => {
      const weatherDetails: Array<LocationItemType> = [];
      res.forEach(({ data }) => weatherDetails.push(getFormattedWeatherDetails(data)));
      dispatch({ type: ACTION_TYPES.SET_WEATHER_INFO, data: weatherDetails });
    }).finally(() => {
      dispatch({ type: ACTION_TYPES.SET_LOADER, data: false });
    })
  };
  navigator.geolocation.getCurrentPosition((position) => {
    _getAllData(position);
  }, () => {
    _getAllData();
  });

};

const _getSingleCityWeatherInfo = (cityId: number): AppAction => (dispatch, getState) => {
  const weatherData = [...getState().app.weatherReport]; 
  getWeatherDataByCityId(cityId).then(({ data }) => {
    weatherData.push(getFormattedWeatherDetails(data));
    dispatch({ type: ACTION_TYPES.SET_WEATHER_INFO, data: weatherData });
  }).finally(() => {
    dispatch({ type: ACTION_TYPES.SET_LOADER, data: false });
  });
};

export const addOrRemoveSelectedCity = (cityId: number): AppAction => (dispatch, getState) => {
  const selectedCities = [...getState().app.selectedLocations];
  const weatherData = [...getState().app.weatherReport];
  const cityIndex = selectedCities.indexOf(cityId);
  if (cityIndex === -1) {
    selectedCities.push(cityId);
    dispatch(_getSingleCityWeatherInfo(cityId));
  } else {
    selectedCities.splice(cityIndex, 1);
    const selectedCityIndex = weatherData.findIndex(city => city.id === cityId);
    weatherData.splice(selectedCityIndex, 1);
    dispatch({ type: ACTION_TYPES.SET_WEATHER_INFO, data: weatherData });
  }
  dispatch({ type: ACTION_TYPES.SET_SAVED_LOCATIONS, data: selectedCities });
  StorageUtility.setItem(StorageKeys.SELECTED_CITIES, selectedCities);
};