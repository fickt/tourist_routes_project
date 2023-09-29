import {setError, setLoader} from "components/loader-error";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {apiSpots, handleSpots} from "modules/card-list";
import {imageSearchService, setNewRoutes} from "modules/image-search-popup";
import {dropErrorMessage, filterErrorMessage} from "modules/filters/constants/constants";
import {Dispatch} from "redux";
import {resetFiltersAction} from "modules/filters/store/filtersActions";

export async function sendRequest(
    dispatch: Dispatch,
    searchRoutesByImage: TLocalRoute[],
    categories: string[],
    difficulties: string[],
    closeWindow: () => void
) {
    const categoryList = categories.join();
    const difficultyList = difficulties.join();
    dispatch(setLoader(true));
    try {
        const response: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpotFilter(difficultyList, categoryList);
        if (response && searchRoutesByImage) {
            const filteredRoutes = response.data.filter((route) =>
                searchRoutesByImage.some((filteredSpot) => filteredSpot.id === route.id)
            );
            dispatch(setNewRoutes(filteredRoutes));
        } else {
            dispatch(handleSpots(response.data));
        }
    } catch (e) {
        dispatch(setError(filterErrorMessage));
    } finally {
        dispatch(setLoader(false));
        closeWindow();
    }
}

export async function dropFilters(dispatch: Dispatch, file: File | null, closeWindow: () => void) {
    dispatch(setLoader(true));
    dispatch(resetFiltersAction());
    try {
        if (file) {
            const response: AxiosResponse<TLocalRoute[]> = await imageSearchService.sendImageSearch(file);
            response && dispatch(setNewRoutes(response.data));
        } else {
            const response: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
            response && dispatch(handleSpots(response.data));
        }
    } catch (e) {
        dispatch(setError(dropErrorMessage));
    } finally {
        dispatch(setLoader(false));
        closeWindow();
    }
}