import {TLocalRoutes} from "utils/localRoutes";
import {SET_NEW_ROUTES} from "./imageSearchActionsTypeNames";

export const setNewRoutes = (payload: TLocalRoutes) => ({
    type: SET_NEW_ROUTES,
    payload: payload,
});