import ACTION_TYPES from "./App.actionTypes";

const initState = {
  selectedLocations: [],
  weatherReport: [],
  loader: false,
};

export type ActionType = {
  type: string;
  data: any;
}

export default (state = initState, action: ActionType) => {
  switch(action.type) {
    case ACTION_TYPES.SET_WEATHER_INFO:
      return {...state, weatherReport: action.data };
    case ACTION_TYPES.SET_SAVED_LOCATIONS:
      return { ...state, selectedLocations: action.data};
    case ACTION_TYPES.SET_LOADER:
      return { ...state, loader: action.data };
  }
  return state;
};