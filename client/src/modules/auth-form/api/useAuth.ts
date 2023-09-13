import {
    handleAuthError,
    handleAuthLoader,
    handleSetUser,
    handleUserAuth,
    handleUserReg
} from "modules/auth-form/store/authActions";
import {authLoader, authUser} from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {TServerResponse, TUser} from "modules/auth-form/store/types/authTypes";
import {authService} from "modules/auth-form/api/authService";

export const useAuth = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(authLoader);
    const user = useAppSelector(authUser);

    // Что произошло: регистрация или логин
    const setAction = (isRegistration: boolean) => {
        isRegistration ? handleUserReg(true) : handleUserAuth(true);
    }

    // Установка ошибки
    const setError = (e: Error | TServerResponse) => {
        e.response
            ? dispatch(handleAuthError(e.response.data.error))
            : dispatch(handleAuthError("Попробуйте снова")); // ошибка 504 (отвалились докер-контейнеры)
    }

    const authenticate = async (
        nickname: string,
        email: string,
        password: string,
        isRegistration: boolean
    ) => {
        dispatch(handleAuthLoader(true)); // включить loader
        try {
            const response: TServerResponse = isRegistration
                ? await authService.register(nickname, email, password) // отправка запроса на регистрацию
                : await authService.login(email, password); // отправка запроса на логин
            const userData: TUser = {
                id: response.data.user.id,
                nickname: response.data.user.nickname,
                email: response.data.user.email,
            }
            dispatch(handleSetUser(userData));
            // Сохранение значений в куках
            Cookies.set("token", response.data.access_token);
            Cookies.set("nickname", response.data.user.nickname);
            Cookies.set("email", response.data.user.email);
            if (isRegistration) {
                Cookies.set("isPass", "true")
            }
            setAction(isRegistration);
        } catch (e: Error | TServerResponse) {
            setError(e);
        } finally {
            dispatch(handleAuthLoader(false)); // выключить loader
        }
    };

    return {user, loader, authenticate};
};