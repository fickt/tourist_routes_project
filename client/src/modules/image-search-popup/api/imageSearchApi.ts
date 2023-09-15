import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {imageSearchService} from "modules/image-search-popup/api/imageSearchService";
import {TLocalRoute} from "utils/localRoutes";
import {setFile, setNewRoutes} from "modules/image-search-popup/store/imageSearchActions";
import {setError, setLoader} from "components/loader-error";

export async function sendImage(
    dispatch: Dispatch,
    formData: File,
    closePopup: () => void,
) {
    dispatch(setError(null));
    dispatch(setLoader(true));
    try {
        const response: AxiosResponse<TLocalRoute[]> = await imageSearchService.sendImageSearch(formData);
        response && dispatch(setNewRoutes(response.data));
        closePopup();
    } catch (e) {
        e.response && dispatch(setError(e.response.data.error));
        setFile(null);
    } finally {
        dispatch(setLoader(false));
    }
}