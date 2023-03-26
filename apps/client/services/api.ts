import axios from 'axios'
import kodConfig from '../kod.config.json'

export default () => {
    const api = axios;
    api.defaults.baseURL = kodConfig.api;
    return api;
}