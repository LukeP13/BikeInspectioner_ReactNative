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
  user,
  password,
  forgotPassword,
  checkPasswordCode,
  resetPassword,
} from "./paths";

const state = {
  development: "http://localhost:5000",
  production: "http://192.168.1.80:5000",
  palafrugell: "http://192.168.1.133:5000",
  hotspot: "http://192.168.43.110:5000",
};
const endpoint = state.production;
const _api = CreateApi(endpoint);

const Api = {
  //Auth
  login: (body) => _api.post(`${login}`, body),
  logout: (body) => _api.post(`${logout}`, body),
  register: (body) => _api.post(`${register}`, body),
  postToken: (token) => _api.post(`${tokens}`, { token }),
  deleteToken: (token) => _api.del(`${tokens}`, { token }),

  forgotPassword: (email) => _api.post(`${forgotPassword}`, { email }),
  checkPasswordCode: (email, code) =>
    _api.post(`${checkPasswordCode}`, { email, code }),
  resetPassword: (email, code, password) =>
    _api.post(`${resetPassword}`, { email, code, password }),

  //User
  getUser: () => _api.get(`${user}`),
  patchUser: (body) => _api.patch(`${user}`, body),
  patchPassword: (oldPassword, newPassword) =>
    _api.patch(`${user}/${password}`, { oldPassword, newPassword }),
  deleteUser: (password) => _api.del(`${user}`, { password }),

  //Get images
  getImageUri: (path) => `${endpoint}/${path}`,

  //Brands && Models
  getBrands: () => _api.get(`${brands}`),
  getBrand: (id) => _api.get(`${brands}/${id}`),
  getModels: (id) => _api.get(`${brands}/${id}/${models}`),

  //Bikes
  getBikes: () => _api.get(`${bikes}`),
  postBike: (body) => _api.post(`${bikes}`, body),
  patchBike: (id, body) => _api.patch(`${bikes}/${id}`, body),
  deleteBike: (id) => _api.del(`${bikes}/${id}`),

  //Revisions
  patchRevision: (bikeId, revId, body) =>
    _api.patch(`${bikes}/${bikeId}/${revisions}/${revId}`, body),
};

export default Api;
