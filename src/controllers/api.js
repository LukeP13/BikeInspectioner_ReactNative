import axios from "axios";
import { store } from "../store";

const state = {
    baseURL: "http://localhost:5000",
}

const CreateApi = (url) => {
    let state = {
        url: url,
        api: axios.create({
            baseURL: url
        })
    }

    function config() {
        let auth = store.getState().auth;

        return auth.isLoggedin ? {
            headers: {
                'Authorization': auth.token 
            }
        } : {}
    }

    function mapQueryParameters(q) {
        return q 
            ? `?${Object.keys(q).map(k => `${k}=${q[k]}&`).join('')}` 
            : '';
    }

    const get = (path, queryParameters) => state.api.get(path + mapQueryParameters(queryParameters), config());
    const post = (path, body={}) => state.api.post(path, body, config());
    const put = (path, body={}) => state.api.put(path, body, config());
    const del = (path) => state.api.delete(path, config());

    return {get, post, put, del}
}

const _api = CreateApi(state.baseURL)

const Api = {
    login: (username, password) =>  _api.post('/login', { username, password })
    
}

export default Api;
