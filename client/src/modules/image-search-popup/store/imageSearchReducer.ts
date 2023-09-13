import {SET_NEW_ROUTES} from "./imageSearchActionsTypeNames";
import {TImageSearchAction, TImageSearchState} from "./types/imageSearchTypes";

const initialState: TImageSearchState = {
    new_routes: null,
}

export const imageSearchReducer = (state = initialState, action: TImageSearchAction) => {
    switch (action.type) {
        case SET_NEW_ROUTES:
            return {
                ...state,
                new_routes: action.payload
            }
        default:
            return state;
    }
}