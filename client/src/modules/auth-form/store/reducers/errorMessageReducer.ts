import { ERROR_MESSAGE } from "../actionsTypes";

export interface IState {
    error_message: string;
}

interface IAction {
    type: string;
    payload: string;
}

const initialState: IState = {
    error_message: ""
}

export const errorMessageReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case ERROR_MESSAGE:
            return {
                ...state,
                error_message: action.payload,
            }
        default:
            return state;
    }
}
