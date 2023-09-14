import {IS_USER_AUTH, IS_USER_REG, SET_USER} from "./authActionsTypeNames";
import {TAuthState, TAuthAction} from "./types/authTypes";

const initialState: TAuthState = {
    user: null,
    user_auth: false,
    user_reg: false,
}

export const authReducer = (state = initialState, action: TAuthAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        case IS_USER_REG:
            return {
                ...state,
                user_reg: action.payload,
            }
        case IS_USER_AUTH:
            return {
                ...state,
                user_auth: action.payload,
            }
        default:
            return state;
    }
}