import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  users: authReducer,
  todos: todoReducer,
});

export default rootReducer;
