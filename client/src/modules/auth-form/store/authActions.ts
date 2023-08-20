import { IS_USER_REG, IS_USER_AUTH, SET_USER, AUTH_ERROR, AUTH_LOADER_ACTIVE } from "./authActionsTypeNames";
import { TUser } from "modules/auth-form/store/types/authTypes";

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