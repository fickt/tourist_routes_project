import {Dispatch} from "redux";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import {toggleReviewPopup} from "components/popup/store/popupActions";
import {routePassService} from "modules/my-spots/api/routePassService";
import {TLocalRoutes} from "utils/localRoutes";
import {setRoutesPass} from "modules/my-spots/store/routesPassActions";
import {setError, setLoader} from "components/loader-error";

export async function setRoutePass(
    dispatch: Dispatch,
    spotId: number,
): Promise<void> {
    dispatch(setLoader(true));
    try {
        await routePassService.setRoutePass(spotId);
        const response = await routePassService.getRoutesPass();
        dispatch(setRoutesPass(response.data));
        dispatch(toggleReviewPopup(true));
    } catch (e: Error | TServerResponse) {
        e.response && dispatch(setError(e.response.data.error));
    } finally {
        dispatch(setLoader(false));
    }
}

export async function getRoutesPass(
    dispatch: Dispatch,
): Promise<void> {
    dispatch(setLoader(true));
    try {
        const response = await routePassService.getRoutesPass();
        const userRoutesPass: TLocalRoutes = response.data;
        dispatch(setRoutesPass(userRoutesPass));
    } catch (e: Error | TServerResponse) {
        e.response && dispatch(setError(e.response.data.error));
    } finally {
        dispatch(setLoader(false));
    }
}