import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {Dispatch} from "redux";
import {reviewService} from "modules/review-block/api/reviewService";
import {FormInstance} from "antd";
import {setError, setLoader} from "components/loader-error";
import {apiSpots, handleSpots} from "modules/card-list";
import {TServerResponse} from "modules/auth-form";
import {setNewRoutes} from "modules/image-search-popup";

export async function sendReview(
    dispatch: Dispatch,
    content: string,
    rating: number,
    spotId: number,
    form: FormInstance,
    setContent: (value: null) => void,
    setRating: (value: number) => void,
    closePopup: () => void,
    searchRoutesByImage?: TLocalRoute[],
    redirectToSpotPage?: () => void,
): Promise<void> {
    dispatch(setLoader(true));
    try {
        const sendReview = await reviewService.sendReview(content, rating, spotId);
        if (sendReview) {
            const spots: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
            spots.data && dispatch(handleSpots(spots.data));
            if (searchRoutesByImage) {
                const newRoutes = spots.data.filter((spot) =>
                    searchRoutesByImage.some((searchByImageRoute) =>
                        searchByImageRoute.id === spot.id)
                );
                dispatch(setNewRoutes(newRoutes));
            }
        }
        form.resetFields();
        setContent(null);
        setRating(0);
        closePopup();
        redirectToSpotPage();
    } catch (e: Error | TServerResponse) {
        dispatch(setError(e.response.data.error));
    } finally {
        dispatch(setLoader(false));
    }
}