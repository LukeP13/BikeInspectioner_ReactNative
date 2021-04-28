import { combineReducers } from "redux";
import generalInfoReducer from "./generalInfo";
import authReducer from "./reducer-auth";
import bikeReducer from "./reducer-bike";

const rootReducer = combineReducers({
  general: generalInfoReducer,

  //Personal info
  auth: authReducer,
  bikes: bikeReducer,
});

export default rootReducer;
