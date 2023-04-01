import axios from 'axios'
import kodConfig from '../kod.config.json'
import { getSession } from 'next-auth/react';

export default () => {
    const authApi = axios;
    authApi.defaults.baseURL = kodConfig.api;
    authApi.interceptors.request.use(async (config) => {
        const session = await getSession()
        if (session.user.token) {
            config.headers.Authorization = `Bearer ${session.user.token}`
        }
        return config
    })
    return authApi;
}