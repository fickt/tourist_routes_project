import {TLocalRoutes} from "utils/localRoutes";
import {SET_NEW_ROUTES} from "modules/image-search-popup/store/imageSearchActionsTypeNames";

export type TImageSearchState = {
    new_routes: TLocalRoutes,
}

export type TImageSearchAction = { type: typeof SET_NEW_ROUTES, payload: TLocalRoutes };