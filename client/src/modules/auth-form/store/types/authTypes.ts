export type TAuthResponse = {
    access_token: string,
    refresh_token: string,
    user: TUser,
}

export type TServerResponse = any; //пока не утвердился тип с бэком

export type TFormData = {
    nickname: string;
    email: string;
    password: string;
    confirm: string;
}

export type TAuthState = {
    error_message: string | null;
    is_loader_active: boolean;
    user: TUser | null;
    user_auth: boolean;
    user_reg: boolean;
}

export type TUser = {
    nickname: string,
    email: string,
}

export type TAuthAction = {
    type: string;
    payload: string;
    user: TUser | null;
}