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
  console.log("");
  return (dispatch) =>
    Api.postToken(token).then(
      () => dispatch({ type: ENABLE_NOTIFICATIONS }),
      (error) => dispatch({ type: ERROR, error })
    );
}

export function disableNotifications(token) {
  console.log("disable");
  return (dispatch) =>
    Api.deleteToken(token).then(
      () => dispatch({ type: DISABLE_NOTIFICATIONS }),
      (error) => dispatch({ type: ERROR, error })
    );
}
