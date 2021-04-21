import axios from "axios";
import { store } from "../store";

export default CreateApi = (url) => {
    let state = {
        url: url,
        api: axios.create({
            baseURL: url
        })
    }

    function config() {
        const { isLoggedIn, token } = store.getState().auth;

        return isLoggedIn ? {
            headers: {
                'Authorization': `Bearer ${token}`
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