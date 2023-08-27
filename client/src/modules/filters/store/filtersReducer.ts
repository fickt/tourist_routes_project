import { DELETE_FILTER_CATEGORY, DELETE_FILTER_DIFFICULTY, RESET_FILTERS, SET_FILTER_CATEGORY, SET_FILTER_DIFFICULTY } from "./filtersActionTypeNames";
import { TFiltersActions } from "./types/filtersActionTypes";
import { TFiltersState } from "./types/filtersReducerTypes";

const initialState: TFiltersState = {
    categories: [],
    difficulties: [],
};

export function filtersReducer(state = initialState, action: TFiltersActions) {

    switch (action.type) {
        case SET_FILTER_CATEGORY:
            state.categories.push(action.payload)
            return state
        case SET_FILTER_DIFFICULTY:
            state.difficulties.push(action.payload)
            return state
        case DELETE_FILTER_CATEGORY:
            return { ...state, categories: state.categories.filter(tag => tag !== action.payload) }
        case DELETE_FILTER_DIFFICULTY:
            return { ...state, difficulties: state.difficulties.filter(tag => tag !== action.payload) }
        case RESET_FILTERS:
            return {...state, categories: [], difficulties: []}

        default:
            return state
    }
}