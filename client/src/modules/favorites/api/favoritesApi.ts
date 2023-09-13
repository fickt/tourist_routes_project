import {AxiosResponse} from "axios";
import {TLocalRoutes} from "utils/localRoutes";
import {favoriteService} from "modules/favorites/api/favoriteService";
import {setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {Dispatch} from "redux";
import {setError, setLoader} from "components/loader-error";

export async function getFavSpots(dispatch: Dispatch,) {
    dispatch(setLoader(true));
    try {
        const favSpots: AxiosResponse<TLocalRoutes> = await favoriteService.getUserFavorites();
        favSpots && dispatch(setFavoriteSpots(favSpots.data));
    } catch (e) {
        e.response && dispatch(setError(e.response.data.error));
    } finally {
        dispatch(setLoader(false));
    }
}