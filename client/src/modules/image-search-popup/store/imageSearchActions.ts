import {TLocalRoutes} from "utils/localRoutes";
import {SET_NEW_ROUTES, SET_FILE} from "./imageSearchActionsTypeNames";

export const setNewRoutes = (payload: TLocalRoutes) => ({
    type: SET_NEW_ROUTES,
    payload: payload,
});

export const setFile = (payload: File | null) => ({
    type: SET_FILE,
    payload: payload,
});