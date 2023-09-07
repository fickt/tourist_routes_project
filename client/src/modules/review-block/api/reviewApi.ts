import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {Dispatch} from "redux";
import {reviewService} from "modules/review-block/api/reviewService";
import {apiSpots} from "modules/card-list/api/spotsService";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import {FormInstance} from "antd";

export async function sendReview(
    dispatch: Dispatch,
    content: string,
    rating: number,
    spotId: number,
    form: FormInstance,
    setContent: (value: null) => void,
    setRating: (value: number) => void,
    closePopup: () => void,
): Promise<void> {
    dispatch(handleAuthLoader(true));
    try {
        const favSpot = await reviewService.sendReview(content, rating, spotId);
        if (favSpot) {
            const spots: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
            spots.data && dispatch(handleSpots(spots.data));
        }
        form.resetFields();
        setContent(null);
        setRating(0);
        closePopup();
    } catch (e: Error | TServerResponse) {
        dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}