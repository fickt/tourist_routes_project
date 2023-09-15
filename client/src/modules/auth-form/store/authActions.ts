import {TUser} from "./types/authTypes";
import {SET_USER, IS_USER_REG, IS_USER_AUTH} from "./authActionsTypeNames";

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