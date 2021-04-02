import Api from '../controllers/api';
import {
    LOGIN,
    LOGOUT
} from './types';

export function login (username, password) {
    return (dispatch) => Api.login(username, password).then(
            response => dispatch({ type: LOGIN, payload: response.data }),
            err => {
                console.log(`ERROR: ${err}`);
                return dispatch({})
            }
    )
}