import { TUser } from "./TUser";

export type AuthResponse = {
    accessToken: string,
    refreshToken: string,
    user: TUser,
}