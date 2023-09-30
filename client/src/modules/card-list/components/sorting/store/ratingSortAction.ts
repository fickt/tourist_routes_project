import {SET_RATING_SPOTS} from "modules/card-list/components/sorting/store/ratingSortTypeNames";

export const handleSort = (data: boolean) => {
    return {
        type: SET_RATING_SPOTS,
        payload: data
    }
}