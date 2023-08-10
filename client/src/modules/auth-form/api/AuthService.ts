import $api from "../api/index";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../types/AuthResponse";
import { API_URL} from "../api/index";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/login", { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>("/registration", { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post("/logout");
    }

    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return $api.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
    }
}