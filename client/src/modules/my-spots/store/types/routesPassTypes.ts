import {TLocalRoutes,} from "utils/localRoutes";
import {SET_ROUTES_PASS} from "modules/my-spots/store/routesPassActionsTypeNames";

export type TRoutesPassResponse = {
    routesPass: TLocalRoutes,
}

export type TRoutesPassState = {
    routesPass: TLocalRoutes,
}

export type TRoutesPassAction = { type: typeof SET_ROUTES_PASS, payload: TLocalRoutes };