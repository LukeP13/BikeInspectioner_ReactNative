import CreateApi from "./create-api";
import { login, brands, models, bikes, register, logout } from "./paths";

const state = {
  development: "http://localhost:5000",
  production: "http://192.168.1.133:5000",
};
const _api = CreateApi(state.production);

const Api = {
  //Auth
  login: (body) => _api.post(`${login}`, body),
  logout: (body) => _api.post(`${logout}`, body),
  register: (body) => _api.post(`${register}`, body),

  //Brands && Models
  getBrands: () => _api.get(`${brands}`),
  getBrand: (id) => _api.get(`${brands}/${id}`),
  getModels: (id) => _api.get(`${brands}/${id}/${models}`),

  //Bikes
  getBikes: () => _api.get(`${bikes}`),
  postBike: (body) => _api.post(`${bikes}`, body),
};

export default Api;
