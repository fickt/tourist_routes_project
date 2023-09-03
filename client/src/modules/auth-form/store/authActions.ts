import {TUser} from "./types/authTypes";
import {
    AUTH_ERROR,
    AUTH_LOADER_ACTIVE,
    SET_USER,
    IS_USER_REG,
    IS_USER_AUTH
} from "./authActionsTypeNames";

export const handleAuthError = (payload: string | null) => ({
    type: AUTH_ERROR,
    payload: payload,
});

export const handleAuthLoader = (payload: boolean) => ({
    type: AUTH_LOADER_ACTIVE,
    payload: payload,
});

export const handleSetUser = (payload: TUser | null) => ({
    type: SET_USER,
    payload: payload,
});

export const handleUserReg = (payload: boolean) => ({
    type: IS_USER_REG,
    payload: payload,
});

export const handleUserAuth = (payload: boolean) => ({
    type: IS_USER_AUTH,
    payload: payload,
});