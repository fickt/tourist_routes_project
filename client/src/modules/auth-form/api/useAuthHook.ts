import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/authActions";
import { authLoader } from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { AuthService } from "modules/auth-form/api/AuthService";
import { TServerResponse } from "modules/auth-form/store/types/authTypes";

export const useAuthentication = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);

    // Сообщение об успехе
    const setSuccessMessage = (isRegistration: boolean, response: TServerResponse) => {
        isRegistration
            ? dispatch(handleErrorMessage(`Пользователь ${response.data.user.nickname} успешно зарегистрирован`))
            : dispatch(handleErrorMessage(`Пользователь ${response.data.user.nickname} авторизирован`))
    }

    // Установка события, которое произошло: регистрация или логин
    const setAction = (isRegistration: boolean) => {
        isRegistration ? handleUserReg(true) : handleUserAuth(true);
    }

    const setError = (e: Error | TServerResponse) => {
        e.response
            ? dispatch(handleErrorMessage(e.response.data.error))
            : dispatch(handleErrorMessage("Попробуйте снова")); // ошибка 504 (отвалились докер-контейнеры)
    }

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
            dispatch(handleSetUser(response.data.user)); // установка пользователя
            setAction(isRegistration);
            setSuccessMessage(isRegistration, response);
        } catch (e: Error | any) {
            setError(e);
        } finally {
            dispatch(handleLoaderActive(false)); // выключить loader
        }
    };

    return { loader, authenticate };
};