import { GOT_FCMTOKEN } from "../actions/types";

const initialState = {
  token: "",
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FCMTOKEN:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default notificationsReducer;
