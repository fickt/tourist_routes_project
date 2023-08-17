import { AxiosResponse } from "axios";
import { RoutePath } from "pages/routeConfig";
import { TAuthResponse } from "modules/auth-form/store/types/authTypes";
import $api from "modules/auth-form/api/index";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post(RoutePath.login, { email, password });
    }

    static async register(nickname: string, email: string, password: string): Promise<AxiosResponse<TAuthResponse>> {
        return $api.post(RoutePath.register, { nickname, email, password });
    }

    static async logout(): Promise<void> {
        return $api.post<typeof RoutePath.logout, null, void>(RoutePath.logout);
    }
}