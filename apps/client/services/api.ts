import axios from 'axios'


export default () => {
    const api = axios;
    api.defaults.baseURL = process.env.API
    return api;
}