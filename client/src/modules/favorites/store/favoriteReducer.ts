import {TFavoriteAction, TFavoriteState} from "./types/favoriteTypes";
import {ADD_FAV_SPOT, SET_FAV_SPOTS, IS_FAV_MARK_ACTIVE} from "./favoriteActionsTypeNames";

const initialState: TFavoriteState = {
    favSpots: null,
    isFavMarkActive: false,
    updatedSpots: null,
}

export const favoriteReducer = (state = initialState, action: TFavoriteAction) => {
    switch (action.type) {
        case SET_FAV_SPOTS:
            return {
                ...state,
                favSpots: action.payload,
            }
        case ADD_FAV_SPOT:
            return {
                ...state,
                favSpots: [...state.favSpots, action.payload],
            }
        case IS_FAV_MARK_ACTIVE:
            return {
                ...state,
                isFavMarkActive: action.payload,
            }
        default:
            return state;
    }
}