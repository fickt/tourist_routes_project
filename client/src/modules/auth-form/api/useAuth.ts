import { handleErrorMessage, handleLoaderActive, handleSetUser, handleUserAuth, handleUserReg } from "modules/auth-form/store/authActions";
import { authLoader, authUser } from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { TServerResponse } from "modules/auth-form/store/types/authTypes";
import { authService } from "modules/auth-form/api/authService";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";

export const useAuth = () => {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const user = useAppSelector(authUser);

    // Сообщение об успехе
    const setSuccessMessage = (isRegistration: boolean, response: TServerResponse) => {
        isRegistration
            ? dispatch(handleErrorMessage(`Пользователь ${response.data.user.nickname} зарегистрирован`))
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
            const response: TServerResponse = isRegistration
                ? await authService.register(nickname, email, password) // отправка запроса на регистрацию
                : await authService.login(email, password); // отправка запроса на логин
            dispatch(handleSetUser({ // установка пользователя
                nickname: response.data.user.nickname,
                email: response.data.user.email,
            }));
            Cookies.set("token", response.data.access_token); // установка токена в куки
            setAction(isRegistration);
            setSuccessMessage(isRegistration, response);
            navigate(RoutePath.profile);
        } catch (e: Error | TServerResponse) {
            setError(e);
        } finally {
            dispatch(handleLoaderActive(false)); // выключить loader
        }
    };

    return { user, loader, authenticate };
};