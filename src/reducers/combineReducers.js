import todoReducer from "./todoReducer";
import newsReducer from "./newsReducer";
import { combineReducers } from "redux";

export default combineReducers({
  todoReducer,
  newsReducer
});
