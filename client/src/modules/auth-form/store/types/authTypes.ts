export type TAuthResponse = {
    accessToken: string,
    refreshToken: string,
    user: TUser,
}

export type TFormData = {
    nickname: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type TState = {
    error_message: string;
    is_loader_active: boolean;
    user: TUser | null;
    user_auth: boolean;
    user_reg: boolean;
}

export type TUser = {
    email: string,
    isActivated: boolean,
    id: string,
}

export type TAction = {
    type: string;
    payload: string;
    user: TUser | null;
}