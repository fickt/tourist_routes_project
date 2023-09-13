import {handleSetUser, handleUserAuth, handleUserReg} from "modules/auth-form/store/authActions";
import {authUser} from "modules/auth-form/store/authSelectors";
import Cookies from "js-cookie";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {TServerResponse, TUser} from "modules/auth-form/store/types/authTypes";
import {authService} from "modules/auth-form/api/authService";
import {isLoader, setError, setLoader} from "components/loader-error";

export const useAuth = () => {

    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const user = useAppSelector(authUser);

    // Установка флага: регистрация или логин
    const setAction = (isRegistration: boolean) => {
        isRegistration ? handleUserReg(true) : handleUserAuth(true);
    }

    // Установка ошибки
    const setAuthError = (e: Error | TServerResponse) => {
        e.response
            ? dispatch(setError(e.response.data.error))
            : dispatch(setError("Попробуйте снова")); // ошибка 504 (отвалились докер-контейнеры)
    }

    const authenticate = async (
        nickname: string,
        email: string,
        password: string,
        isRegistration: boolean
    ) => {
        dispatch(setLoader(true));
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
            setAction(isRegistration);
        } catch (e: Error | TServerResponse) {
            setAuthError(e);
        } finally {
            dispatch(setLoader(false));
        }
    };

    return {user, loader, authenticate};
};