import CreateApi from './create-api';
import {
    login,
    brands,
    models,
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
}

export default Api;
