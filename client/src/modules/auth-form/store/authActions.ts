import { IS_USER_REG, IS_USER_AUTH, SET_USER, ERROR_MESSAGE, IS_LOADER_ACTIVE } from "./authActionsTypes";
import { TUser } from "modules/auth-form/store/types/authTypes";

export const handleErrorMessage = (payload: string | null) => ({
    type: ERROR_MESSAGE,
    payload: payload,
});

export const handleLoaderActive = (payload: string) => ({
    type: IS_LOADER_ACTIVE,
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