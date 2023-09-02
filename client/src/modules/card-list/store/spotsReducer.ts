import {
    SET_CHOSEN_MAP_SPOT,
    SET_CHOSEN_SPOT,
    SET_SPOTS,
    SET_MAP_SPOTS,
    IS_SPOTS_LOADING,
    SPOTS_ERROR
} from "./spotsActionTypeNames";
import {TSpotsActions} from "modules/card-list/store/types/spotsActionTypes";
import {TSpotsState} from "./types/spotsReducerTypes";

const initialState: TSpotsState = {
    data: null,
    map_data: null,
    total: null,
    loading: false,
    error: false,
    chosen_spot: null,
    chosen_map_spot: null,
};

export function spotsReducer(state = initialState, action: TSpotsActions) {

    switch (action.type) {
        case SET_SPOTS:
            return {...state, data: action.payload}
        case SET_MAP_SPOTS:
            return {...state, data: action.payload}
        case SPOTS_ERROR:
            return {...state, error: action.payload}
        case IS_SPOTS_LOADING:
            return {...state, loading: action.payload}
        case SET_CHOSEN_SPOT:
            return {...state, chosen_spot: action.payload}
        case SET_CHOSEN_MAP_SPOT:
            return {...state, chosen_map_spot: action.payload}
        default:
            return state
    }
}