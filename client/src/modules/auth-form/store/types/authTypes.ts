import { AUTH_ERROR, AUTH_LOADER_ACTIVE, SET_USER, IS_USER_REG, IS_USER_AUTH } from "modules/auth-form/store/authActionsTypeNames";


export type TAuthResponse = {
    access_token: string,
    refresh_token: string,
    user: TUser,
}

export type TServerResponse = any; //пока не утвердился тип с бэком

export type TAuthState = {
    error_message: string | null,
    is_loader_active: boolean,
    user: TUser | null,
    user_auth: boolean,
    user_reg: boolean,
}

export type TUser = {
    email: string,
    id?: number,
    nickname: string,
}

export type TAuthAction =
    | { type: typeof AUTH_ERROR, payload: string | null }
    | { type: typeof AUTH_LOADER_ACTIVE, payload: boolean }
    | { type: typeof SET_USER, payload: TUser | null }
    | { type: typeof IS_USER_REG, payload: boolean }
    | { type: typeof IS_USER_AUTH, payload: boolean };