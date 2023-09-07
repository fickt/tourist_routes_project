import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {apiSpots} from "modules/card-list/api/spotsService";
import {Dispatch} from "redux";

export async function getSpots(dispatch: Dispatch) {
    dispatch(handleAuthLoader(true));
    try {
        const spotsList: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
        const spotsWithFavoriteInfo = spotsList.data.map((spot: TLocalRoute) => ({
            ...spot,
            isFavorite: false,
        }));
        dispatch(handleSpots(spotsWithFavoriteInfo));
    } catch (e) {
        e.response
            ? dispatch(handleAuthError(e.response.data.error))
            : dispatch(handleAuthError("Упс... Возникли проблемы с загрузкой мест:("));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}