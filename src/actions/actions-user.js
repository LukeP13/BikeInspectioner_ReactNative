import Api from '../controllers/api';
import {
    USER,
    ERROR
} from './types';

export function getUser () {
    return (dispatch) => Api.getUser(id).then(
        response => dispatch({ type: USER, payload: response.data }),
        _ => dispatch({ type: ERROR })
    )
}