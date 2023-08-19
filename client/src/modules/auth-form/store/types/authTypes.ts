export type TAuthResponse = {
    access_token: string,
    refresh_token: string,
    user: TUser,
}

export type TServerResponse = any;

export type TFormData = {
    nickname: string;
    email: string;
    password: string;
    confirm: string;
}

export type TState = {
    error_message: string | null;
    is_loader_active: boolean;
    user: TUser | null;
    user_auth: boolean;
    user_reg: boolean;
}

export type TUser = {
    nickname?: string,
    email: string,
    isActivated: boolean,
    id: string,
}

export type TAction = {
    type: string;
    payload: string;
    user: TUser | null;
}