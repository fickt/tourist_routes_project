import { ERROR_MESSAGE, IS_LOADER_ACTIVE, IS_USER_AUTH, IS_USER_REG, SET_USER } from "./authActionsTypes";
import { TState, TAction } from "./types/authTypes";


const initialState: TState = {
    error_message: "",
    is_loader_active: false,
    user: null,
    user_auth: false,
    user_reg: false,
}

export const authReducer = (state = initialState, action: TAction) => {
    switch(action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                error_message: action.payload,
            }
        case IS_LOADER_ACTIVE:
            return {
                ...state,
                is_loader_active: action.payload,
            }
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