import { GOT_FCMTOKEN } from "./types";

export function saveToken(token) {
  console.log(token);
  return {
    type: GOT_FCMTOKEN,
    payload: token,
  };
}
