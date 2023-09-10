import {SET_FAV_SPOTS} from "modules/favorites/store/favoriteActionsTypeNames";
import {TLocalRoutes} from "utils/localRoutes";

export const setFavoriteSpots = (payload: TLocalRoutes) => ({
    type: SET_FAV_SPOTS,
    payload: payload,
});