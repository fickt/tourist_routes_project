import {TLocalRoutes, TReview} from "utils/localRoutes";
import {SET_FAV_SPOTS} from "modules/favorites/store/favoriteActionsTypeNames";

export type TFavoriteResponse = {
    favSpots: TLocalRoutes,
}

export type TFavoriteState = {
    favSpots: TLocalRoutes,
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

export type TFavoriteAction = { type: typeof SET_FAV_SPOTS, payload: TLocalRoutes };