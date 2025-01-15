import ACTION_TYPES from "./App.actionTypes";

const initState = {
  selectedLocations: [],
  weatherReport: [],
};

type ActionType = {
  type: string;
  data: any;
}

export default (state = initState, action: ActionType) => {
  switch(action.type) {
    case ACTION_TYPES.ADD_TO_SAVED_LOCATIONS:
      return {...state};
    case ACTION_TYPES.REMOVE_FROM_SAVED_LOCATIONS:
      return {...state};
    case ACTION_TYPES.SET_WEATHER_INFO:
      return {...state};
  }
  return state;
};