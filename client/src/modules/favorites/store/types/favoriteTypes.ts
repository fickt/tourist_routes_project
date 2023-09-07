import {TLocalRoutes, TLocalRoute, TReview} from "utils/localRoutes";
import {
    SET_FAV_SPOTS,
    ADD_FAV_SPOT,
    IS_FAV_MARK_ACTIVE,
    IS_SPOTS_UPDATED
} from "modules/favorites/store/favoriteActionsTypeNames";

export type TFavoriteResponse = {
    favSpots: TLocalRoutes,
}

export type TFavoriteState = {
    favSpots: TLocalRoutes | null,
    isFavMarkActive: boolean,
    updatedSpots: null | TUpdatedRoutes,
}

export type TUpdatedRoute = {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    categories: string[];
    longitude: number;
    latitude: number;
    rating: number;
    photos: string[];
    comments: TReview[];
    target_audiences: string[],
    activeFavMark: boolean,
}

export type TUpdatedRoutes = TUpdatedRoute[];

export type TFavoriteAction =
    | { type: typeof SET_FAV_SPOTS, payload: TLocalRoutes | null }
    | { type: typeof ADD_FAV_SPOT, payload: TLocalRoute }
    | { type: typeof IS_FAV_MARK_ACTIVE, payload: boolean }
    | { type: typeof IS_SPOTS_UPDATED, payload: TUpdatedRoutes | null };