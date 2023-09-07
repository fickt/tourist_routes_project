import axios from "axios";
import Cookies from "js-cookie";

export const AUTH_TOKEN = Cookies.get("token") || null;

export const api = axios.create({
    baseURL: "http://app.localhost/api",
    headers: {
        Authorization: AUTH_TOKEN ? `Bearer ${AUTH_TOKEN}` : "",
    },
});

// Добавляем интерцептор для обновления заголовка перед каждым запросом
api.interceptors.request.use((config) => {
    const updatedConfig = { ...config };
    const newAuthToken = Cookies.get("token") || null;
    if (newAuthToken) {
        updatedConfig.headers.Authorization = `Bearer ${newAuthToken}`;
    }
    return updatedConfig;
});
