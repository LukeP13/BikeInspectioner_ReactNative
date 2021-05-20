import Api from "../controllers/api";
import {
  DISABLE_NOTIFICATIONS,
  ENABLE_NOTIFICATIONS,
  ERROR,
  GOT_FCMTOKEN,
} from "./types";

export function saveToken(token) {
  return {
    type: GOT_FCMTOKEN,
    payload: token,
  };
}

export function enableNotifications(token) {
  return (dispatch) =>
    Api.postToken(token).then(
      () => dispatch({ type: ENABLE_NOTIFICATIONS }),
      (error) => dispatch({ type: ERROR, error })
    );
}

export function disableNotifications(token) {
  return (dispatch) =>
    Api.deleteToken(token).then(
      () => dispatch({ type: DISABLE_NOTIFICATIONS }),
      (error) => dispatch({ type: ERROR, error })
    );
}
