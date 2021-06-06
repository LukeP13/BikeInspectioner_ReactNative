import { combineReducers } from "redux";
import generalInfoReducer from "./generalInfo";
import authReducer from "./reducer-auth";
import bikeReducer from "./reducer-bike";
import notificationsReducer from "./reducer-notifications";
import userReducer from "./reducer-user";

const rootReducer = combineReducers({
  general: generalInfoReducer,

  //Personal info
  auth: authReducer,
  user: userReducer,
  bikes: bikeReducer,
  notifications: notificationsReducer,
});

export default rootReducer;
