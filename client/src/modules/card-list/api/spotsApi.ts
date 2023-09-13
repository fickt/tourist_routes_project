import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {apiSpots} from "modules/card-list/api/spotsService";
import {Dispatch} from "redux";
import {setError, setLoader} from "components/loader-error";
import {errorMessage} from "modules/card-list/constants/constants";

export async function getSpots(dispatch: Dispatch) {
    dispatch(setLoader(true));
    try {
        const spotsList: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
        const spotsWithFavoriteInfo = spotsList.data.map((spot: TLocalRoute) => ({
            ...spot,
            isFavorite: false,
        }));
        dispatch(handleSpots(spotsWithFavoriteInfo));
    } catch (e) {
        e.response
            ? dispatch(setError(e.response.data.error))
            : dispatch(setError(errorMessage));
    } finally {
        dispatch(setLoader(false));
    }
}