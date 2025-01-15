import { combineReducers } from "redux";
import AppReducer from "../App.reducer";

const reducers = combineReducers({
  app: AppReducer,
});

export default reducers;
