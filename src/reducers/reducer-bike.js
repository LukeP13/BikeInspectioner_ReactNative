import { GOT_BIKES } from "../actions/types";

const initialState = [];

const bikeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_BIKES:
      return action.payload;
    default:
      return state;
  }
};

export default bikeReducer;
