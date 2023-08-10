import { IS_USER_AUTH, IS_USER_REG } from "../actionsTypes";

export interface IState {
    user_auth: boolean;
    user_reg: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: { user_auth: boolean; user_reg: boolean } = {
    user_auth: false,
    user_reg: false,
}

export const userStatusReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
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