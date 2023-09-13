import {Dispatch} from "redux";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import {toggleReviewPopup} from "ui/popup/store/popupActions";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {routePassService} from "modules/my-spots/api/routePassService";
import {TLocalRoutes} from "utils/localRoutes";
import {setRoutesPass} from "modules/my-spots/store/routesPassActions";

export async function setRoutePass(
    dispatch: Dispatch,
    spotId: number,
): Promise<void> {
    dispatch(handleAuthLoader(true));
    try {
        await routePassService.setRoutePass(spotId);
        dispatch(toggleReviewPopup(true));
    } catch (e: Error | TServerResponse) {
        e.response && dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}

export async function getRoutesPass(
    dispatch: Dispatch,
): Promise<void> {
    dispatch(handleAuthLoader(true));
    try {
        const response = await routePassService.getRoutesPass();
        const userRoutesPass: TLocalRoutes = response.data;
        dispatch(setRoutesPass(userRoutesPass));
        console.log(response);
    } catch (e: Error | TServerResponse) {
        e.response && dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}