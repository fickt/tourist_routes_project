import axios from "axios";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";
import {TAuthResponse} from "modules/auth-form/store/types/authTypes";
import {RoutePath} from "pages/routeConfig";

export const API_URL = `http://app.localhost/api`;
export const api = axios.create({
    baseURL: API_URL,
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return config;
})

api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.post<TAuthResponse>(`${API_URL}/auth/refresh`)
            Cookies.set("token", response.data.access_token);
            return api.request(originalRequest);
        } catch (e) {
            const cookies = Object.keys(Cookies.get());
            cookies.forEach(cookieName => {
                Cookies.remove(cookieName);
            });
            window.location.reload();
            const navigate = useNavigate();
            navigate(RoutePath.auth_login);
        }
    }
    throw error;
})

export default api;
