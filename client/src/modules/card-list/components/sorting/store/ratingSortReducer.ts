import {TRatingSort} from "modules/card-list/components/sorting/store/types/ratingSortActionTypes";
import {SET_RATING_SPOTS} from "modules/card-list/components/sorting/store/ratingSortTypeNames";

interface ratingSort {
    rating: boolean
}

const initialState: ratingSort = {
    rating: true
};

export function ratingSortReducer(state = initialState, action: TRatingSort) {
    switch (action.type) {
        case SET_RATING_SPOTS:
            return {...state, rating: action.payload}
        default:
            return state
    }
}