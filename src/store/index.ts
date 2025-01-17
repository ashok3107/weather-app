import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { thunk } from "redux-thunk";
import { useDispatch, useSelector } from "react-redux";

const store = createStore(reducers, {}, applyMiddleware(thunk));

type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;