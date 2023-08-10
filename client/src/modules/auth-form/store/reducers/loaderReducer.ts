import { IS_LOADER_ACTIVE } from "../actionsTypes";

export interface IState {
    is_loader_active: boolean;
}

interface IAction {
    type: string;
    payload: boolean;
}

const initialState: IState = {
    is_loader_active: false
}

export const loaderReducer = (state: IState = initialState, action: IAction) => {
    switch(action.type) {
        case IS_LOADER_ACTIVE:
            return {
                ...state,
                is_loader_active: action.payload,
            }
        default:
            return state;
    }
}