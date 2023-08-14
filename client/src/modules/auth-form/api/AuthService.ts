import { AxiosResponse } from "axios";
import { AppRoutes, RoutePath } from "pages/routeConfig";
import { TAuthResponse } from "modules/auth-form/store/types/authTypes";
import $api from "modules/auth-form/api/index";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post<TAuthResponse>(RoutePath[AppRoutes.LOGIN], { email, password });
    }

    static async registration(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post<TAuthResponse>(RoutePath[AppRoutes.REGISTRATION], { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post(RoutePath[AppRoutes.LOGOUT]);
    }
}