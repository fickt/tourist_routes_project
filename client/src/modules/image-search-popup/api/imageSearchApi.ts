import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {Dispatch} from "redux";
import {imageSearchService} from "modules/image-search-popup/api/imageSearchService";
import {TLocalRoute} from "utils/localRoutes";
import {setNewRoutes} from "modules/image-search-popup/store/imageSearchActions";

export async function sendImage(dispatch: Dispatch, selectedFile: string) {
    dispatch(handleAuthLoader(true));
    try {
        const response: AxiosResponse<TLocalRoute[]> = await imageSearchService.sendImageSearch(selectedFile);
        response && dispatch(setNewRoutes(response.data));
    } catch (e) {
        e.response && dispatch(handleAuthError(e.response.data.error));
    } finally {
        dispatch(handleAuthLoader(false));
    }
}