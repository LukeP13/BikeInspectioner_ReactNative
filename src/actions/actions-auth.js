import Api from '../controllers/api';
import {
    LOGIN,
    LOGOUT,
    ERROR
} from './types';

export function login (username, password, token) {
    return (dispatch) => Api.login({ username, password, notificationToken:token }).then(
        response => dispatch({ type: LOGIN, payload: response.data }),
        err => dispatch({ type: ERROR, error: err.response.data && err.response.data.message })
    )
}

export function logout () {
    return { type: LOGOUT }
}

