import {TLocalRoutes} from "utils/localRoutes";
import {SET_NEW_ROUTES, SET_FILE} from "modules/image-search-popup/store/imageSearchActionsTypeNames";

export type TImageSearchState = {
    new_routes: TLocalRoutes,
    file: File | null,
}

export type TImageSearchAction = { type: typeof SET_NEW_ROUTES, payload: TLocalRoutes }
| { type: typeof SET_FILE, payload: File | null };