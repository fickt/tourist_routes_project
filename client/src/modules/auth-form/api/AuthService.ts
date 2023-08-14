import $api from "../api/index";
import { AxiosResponse } from "axios";
import { API_URL} from "../api/index";
import { TAuthResponse } from "../store/types/authTypes";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post<TAuthResponse>("/login", { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post<TAuthResponse>("/registration", { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }

    static async checkAuth(): Promise<AxiosResponse<TAuthResponse>> {
        return $api.get<TAuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    }
}