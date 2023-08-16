import axios from "axios";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { TAuthResponse } from "modules/auth-form/store/types/authTypes";
import { handleErrorMessage } from "modules/auth-form/store/authActions";

export const API_URL = `http://localhost:8080/api/auth`;
export const $api = axios.create({baseURL: API_URL})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Cookies.get("token")}`;
    return config;
})

// проверяет, авторизирован ли user
$api.interceptors.response.use((config) => {
    return config;
},async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<TAuthResponse>(`${API_URL}/refresh`, { withCredentials: true })
            Cookies.set("token", response.data.access_token);
            return $api.request(originalRequest);
        } catch (e) {
            const dispatch = useDispatch();
            dispatch(handleErrorMessage(e.message));
        }
    }
    throw error;
})

export default $api;