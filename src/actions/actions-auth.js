import Api from '../controllers/api';
import {
    LOGIN,
    LOGOUT,
    ERROR
} from './types';

export function login (username, password) {
    return (dispatch) => Api.login(username, password).then(
            response => dispatch({ type: LOGIN, payload: response.data }),
            _ => dispatch({ type: ERROR })
    )
}