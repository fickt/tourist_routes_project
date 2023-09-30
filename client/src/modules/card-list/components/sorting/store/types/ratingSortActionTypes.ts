import {SET_RATING_SPOTS} from "modules/card-list/components/sorting/store/ratingSortTypeNames";

export type TRatingSort = {
    type: typeof SET_RATING_SPOTS,
    payload: boolean
}