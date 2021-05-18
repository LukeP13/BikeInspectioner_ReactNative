import CreateApi from "./create-api";
import {
  login,
  brands,
  models,
  bikes,
  register,
  logout,
  tokens,
  revisions,
} from "./paths";

const state = {
  development: "http://localhost:5000",
  production: "http://192.168.1.80:5000",
};
const _api = CreateApi(state.production);

const Api = {
  //Auth
  login: (body) => _api.post(`${login}`, body),
  logout: (body) => _api.post(`${logout}`, body),
  register: (body) => _api.post(`${register}`, body),
  postToken: (token) => _api.post(`${tokens}`, { token }),
  deleteToken: (token) => _api.del(`${tokens}`, { token }),

  //Brands && Models
  getBrands: () => _api.get(`${brands}`),
  getBrand: (id) => _api.get(`${brands}/${id}`),
  getModels: (id) => _api.get(`${brands}/${id}/${models}`),

  //Bikes
  getBikes: () => _api.get(`${bikes}`),
  postBike: (body) => _api.post(`${bikes}`, body),
  patchBike: (id, body) => _api.patch(`${bikes}/${id}`, body),

  //Revisions
  patchRevision: (bikeId, revId, body) =>
    _api.patch(`${bikes}/${bikeId}/${revisions}/${revId}`, body),
};

export default Api;
