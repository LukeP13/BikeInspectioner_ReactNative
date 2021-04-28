import Api from "../controllers/api";
import { ERROR, GOT_BIKES } from "./types";

export function getBikes() {
  return (dispatch) =>
    Api.getBikes().then(
      (response) => dispatch({ type: GOT_BIKES, payload: response.data }),
      (err) => dispatch({ type: ERROR, error: err })
    );
}

export function addBike(modelId) {
  return (dispatch) =>
    Api.postBike(modelId).then(
      () => getBikes()(dispatch),
      () => dispatch({ type: ERROR })
    );
}
