import CreateApi from './create-api';
import {
    login,
    brands,
    models,
    bikes,
} from './paths';

const state = {
    baseURL: "http://localhost:5000",
}
const _api = CreateApi(state.baseURL)

const Api = {
    //Auth
    login: (username, password) =>  _api.post(`${login}`, { username, password }),

    //Brands && Models
    getBrands: () => _api.get(`${brands}`),
    getBrand:  (id) => _api.get(`${brands}/${id}`),
    getModels: (id) => _api.get(`${brands}/${id}/${models}`),


    //Bikes
    getBikes: () => _api.get(`${bikes}`),
    postBike: (body) => _api.post(`${bikes}`, body)
}

export default Api;
