import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {TLocalRoutes} from "utils/localRoutes";
import {favoriteService} from "modules/favorites/api/favoriteService";
import {setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {Dispatch} from "redux";

export async function getFavSpots(dispatch: Dispatch,) {
    dispatch(handleAuthLoader(true));
    try {
        const favSpots: AxiosResponse<TLocalRoutes> = await favoriteService.getUserFavorites();
        favSpots && dispatch(setFavoriteSpots(favSpots.data));
    } catch (e) {
        e.response && dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}