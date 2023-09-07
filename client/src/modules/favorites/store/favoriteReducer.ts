import {TFavoriteAction, TFavoriteState} from "./types/favoriteTypes";
import {SET_FAV_SPOTS} from "./favoriteActionsTypeNames";

const initialState: TFavoriteState = {
    favSpots: null,
}

export const favoriteReducer = (state = initialState, action: TFavoriteAction) => {
    switch (action.type) {
        case SET_FAV_SPOTS:
            return {
                ...state,
                favSpots: action.payload,
            }
        default:
            return state;
    }
}