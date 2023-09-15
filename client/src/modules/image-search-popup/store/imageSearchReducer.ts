import {SET_NEW_ROUTES, SET_FILE} from "./imageSearchActionsTypeNames";
import {TImageSearchAction, TImageSearchState} from "./types/imageSearchTypes";

const initialState: TImageSearchState = {
    new_routes: null,
    file: null
}

export const imageSearchReducer = (state = initialState, action: TImageSearchAction) => {
    switch (action.type) {
        case SET_NEW_ROUTES:
            return {
                ...state,
                new_routes: action.payload
            }
        case SET_FILE:
            return {
                ...state,
                file: action.payload
            }
        default:
            return state;
    }
}