import { SET_USER } from "../actionsTypes";
import { TUser } from "modules/auth-form";

export interface IState {
    user: TUser | null;
}

export interface IAction {
    type: string;
    payload: TUser | null;
}

const initialState: IState = {
    user: null
}

export const setUserReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }
        default:
            return state;
    }
}