import { LOGOUT, USER } from "../actions/types";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER:
      console.log("aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", action.payload);
      return action.payload;
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
