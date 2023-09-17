import {SET_USER, IS_USER_REG, IS_USER_AUTH} from "modules/auth-form/store/authActionsTypeNames";

export type TAuthResponse = {
    access_token: string,
    refresh_token: string,
    user: TUser,
}

export type TLogoutResponse = {
    message: string,
    user: TUser
}

export type TServerResponse = any; //пока не утвердился тип с бэком

export type TAuthState = {
    user: TUser | null,
    user_auth: boolean,
    user_reg: boolean,
}

export type TUser = {
    email: string,
    id?: number,
    nickname: string,
    created_at?: Date,
    updated_at?: Date,
    token?: string,
    is_questionnaire_completed?: boolean
}

export type TAuthAction =
    | { type: typeof SET_USER, payload: TUser | null }
    | { type: typeof IS_USER_REG, payload: boolean }
    | { type: typeof IS_USER_AUTH, payload: boolean };