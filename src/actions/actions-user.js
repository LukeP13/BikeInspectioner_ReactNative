import Api from "../controllers/api";
import { USER, ERROR } from "./types";

export function getUser() {
  return (dispatch) =>
    Api.getUser().then(
      (response) => dispatch({ type: USER, payload: response.data }),
      (_) => dispatch({ type: ERROR })
    );
}

export function patchUser(body) {
  return (dispatch) =>
    Api.patchUser(body).then(
      () => getUser()(dispatch),
      (err) => {
        console.log(err);
        return dispatch({
          type: ERROR,
          error: err?.response?.data && err.response.data.message,
        });
      }
    );
}

export function patchUserPassword(oldPassword, newPassword) {
  return (dispatch) =>
    Api.patchPassword(oldPassword, newPassword).then(
      () => getUser()(dispatch),
      (err) =>
        dispatch({
          type: ERROR,
          error: err.response.data && err.response.data.message,
        })
    );
}

export function deleteUser(password) {
  return (dispatch) =>
    Api.deleteUser(password).then(
      () => getUser()(dispatch),
      (error) => dispatch({ type: ERROR, error })
    );
}
