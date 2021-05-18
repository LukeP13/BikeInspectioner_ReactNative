import {
  ENABLE_NOTIFICATIONS,
  DISABLE_NOTIFICATIONS,
  GOT_FCMTOKEN,
} from "../actions/types";

const initialState = {
  token: null,
  enabled: false,
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_FCMTOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case ENABLE_NOTIFICATIONS:
      return {
        ...state,
        enabled: true,
      };
    case DISABLE_NOTIFICATIONS:
      return {
        ...state,
        enabled: false,
      };
    default:
      return state;
  }
};
export default notificationsReducer;
