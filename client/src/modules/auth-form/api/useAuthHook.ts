import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/authActions";
import { authLoader } from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { AuthService } from "./AuthService";

export const useAuthentication = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);

    const authenticate = async (
        nickname: string,
        email: string,
        password: string,
        isRegistration: boolean
    ) => {
        dispatch(handleLoaderActive(true)); // включить loader
        try {
            const response = isRegistration
                ? await AuthService.register(nickname, email, password) // отправка запроса на регистрацию
                : await AuthService.login(email, password); // отправка запроса на логин
            Cookies.set("token", response.data.access_token); // установка токена в куки
            isRegistration ? handleUserReg(true) : handleUserAuth(true); // установка флага, что произошло: регистрация или логин
            dispatch(handleSetUser(response.data.user)); // установка пользователя
        } catch (e) {
            e.response
                ? dispatch(handleErrorMessage(e.response.data.error))
                : dispatch(handleErrorMessage("Попробуйте снова")); // ошибка 504 (отвалились докер-контейнеры)
        } finally {
            dispatch(handleLoaderActive(false)); // выключить loader
        }
    };

    return { loader, authenticate };
};