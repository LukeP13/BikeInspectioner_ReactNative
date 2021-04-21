import Api from '../controllers/api';
import {
    ERROR, GOT_BIKES
} from './types';


export function getBikes () {
    return (dispatch) => Api.getBikes().then(
        response => dispatch({ type: GOT_BIKES, payload: response.data }),
        _ => dispatch({ type: ERROR })
    );
}


export function addBike (modelId) {
    return (dispatch) => Api.addBike(modelId).then(
        () => getBikes()(dispatch),
        () => dispatch({ type: ERROR })
    )
}