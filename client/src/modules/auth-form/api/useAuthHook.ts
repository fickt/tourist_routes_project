import AuthService from "modules/auth-form/api/AuthService";
import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/authActions";
import { authLoader } from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";

export const useAuthentication = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);

    const authenticate = async (
        nickname: string,
        email: string,
        password: string,
        isRegistration: boolean
    ) => {
        dispatch(handleLoaderActive(true)); // Enable loader
        try {
            const response = isRegistration
                ? await AuthService.register(nickname, email, password)
                : await AuthService.login(email, password);
            Cookies.set("token", response.data.access_token);
            isRegistration ? handleUserReg(true) : handleUserAuth(true);
            dispatch(handleSetUser(response.data.user));
        } catch (e) {
            e.response
                ? dispatch(handleErrorMessage(e.response.data.error))
                : dispatch(handleErrorMessage("Попробуйте снова"));
        } finally {
            dispatch(handleLoaderActive(false)); // Disable loader
        }
    };

    return { loader, authenticate };
};