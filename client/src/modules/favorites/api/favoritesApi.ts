import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {favoriteService} from "modules/favorites/api/favoriteService";
import {setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {Dispatch} from "redux";

export async function getFavSpots(dispatch: Dispatch,) {
    dispatch(handleAuthLoader(true));
    try {
        const favoriteSpots: AxiosResponse<TLocalRoute[]> = await favoriteService.getUserFavorites();
        console.log(favoriteSpots)
    } catch (e) {
        e.response && dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}

export async function fetchFavSpots(dispatch: Dispatch) {
    dispatch(handleAuthLoader(true));
    try {
        const response: AxiosResponse<TLocalRoute[]> = await favoriteService.getUserFavorites();
        response && response.data && dispatch(setFavoriteSpots(response.data));
    } catch (error) {
        error && error.response && dispatch(handleAuthError(error.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}