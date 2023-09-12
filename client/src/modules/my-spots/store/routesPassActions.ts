import {TLocalRoutes} from "utils/localRoutes";
import {SET_ROUTES_PASS} from "modules/my-spots/store/routesPassActionsTypeNames";

export const setRoutesPass = (payload: TLocalRoutes) => ({
    type: SET_ROUTES_PASS,
    payload: payload,
});