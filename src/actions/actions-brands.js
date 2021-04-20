import Api from '../controllers/api';
import {
    GOT_BRANDS,
    GOT_MODELS,
    GOT_BRAND,
    ERROR,
} from './types';

export function getBrands () {
    return (dispatch) => Api.getBrands().then(
        response => dispatch({ type: GOT_BRANDS, payload: response.data }),
        err => dispatch({ type: ERROR, error: err.response.data && err.response.data.message })
    )
}

export function getBrand(id) {
    return (dispatch) => Api.getBrand(id).then(
        response => dispatch({ type: GOT_BRAND, payload: response.data }),
        err => dispatch({ type: ERROR, error: err.response.data && err.response.data.message })
    )
}

export function getModels(brandId) {
    return (dispatch) => Api.getModels(brandId).then(
        response => dispatch({ type: GOT_MODELS, payload: response.data }),
        err => dispatch({ type: ERROR, error: err.response.data && err.response.data.message })
    )
}