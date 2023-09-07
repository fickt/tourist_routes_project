import {SET_FAV_SPOTS, ADD_FAV_SPOT, IS_FAV_MARK_ACTIVE, IS_SPOTS_UPDATED} from "modules/favorites/store/favoriteActionsTypeNames";
import {TLocalRoutes, TLocalRoute} from "utils/localRoutes";
import {TUpdatedRoutes} from "modules/favorites/store/types/favoriteTypes";

export const setFavoriteSpots = (payload: TLocalRoutes | null) => ({
    type: SET_FAV_SPOTS,
    payload: payload,
});

export const addFavoriteSpot = (payload: TLocalRoute) => ({
    type: ADD_FAV_SPOT,
    payload: payload,
});

export const setFavMarkActive = (payload: boolean) => ({
    type: IS_FAV_MARK_ACTIVE,
    payload: payload,
});

export const setSpotsUpdated = (payload: TUpdatedRoutes | null) => ({
    type: IS_SPOTS_UPDATED,
    payload: payload,
});