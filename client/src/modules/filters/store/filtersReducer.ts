import { GET_LOCAL_SPOTS, GET_SPOT_ROUTES, IS_SPOTS_LOADING, SPOTS_ERROR } from "./filtersActionTypeNames";
import { TFiltersActions } from "./types/filtersActionTypes";
import { TFiltersState } from "./types/filtersReducerTypes";

const initialState: TFiltersState = {
    title: null,
    
};

export function filtersReducer(state = initialState, action:TFiltersActions) {

    // switch (action.type) {
    //     case GET_SPOT_ROUTES: 
    //         return {...state, dataDb: action.payload}
    //     case GET_LOCAL_SPOTS: 
    //         return {...state, data: action.payload, total: action.payload.length}         
    //     case SPOTS_ERROR:
    //         return {...state, error: action.payload}
    //     case IS_SPOTS_LOADING:
    //         return {...state, loading: action.payload}
    //     default:
    //         return state
    // }
}