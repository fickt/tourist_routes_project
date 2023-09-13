import {SET_ROUTES_PASS} from "modules/my-spots/store/routesPassActionsTypeNames";
import {TRoutesPassAction, TRoutesPassState} from "modules/my-spots/store/types/routesPassTypes";

const initialState: TRoutesPassState = {
    routesPass: null,
}

export const routesPassReducer = (state = initialState, action: TRoutesPassAction) => {
    switch (action.type) {
        case SET_ROUTES_PASS:
            return {
                ...state,
                routesPass: action.payload,
            }
        default:
            return state;
    }
}