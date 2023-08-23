import { Navigate, useLocation } from "react-router-dom";
import { TProtectedRouteProps } from "./types";
import { RoutePath } from "pages/routeConfig";
import { authUser } from "modules/auth-form/store/authSelectors";
import { useAppSelector } from "storage/hookTypes";

export const ProtectedRoute = ({ onlyOnAuth, isRegister, children }: TProtectedRouteProps) => {

    const location = useLocation();
    const user = useAppSelector(authUser);

    //если это компонент авторизации и пользователь залогинился => редирект на главную или куда заходили по прямому url
    //пользователь не может попасть на страницы авторизации  
    if (onlyOnAuth && user) {

        const from = location?.state?.from || { pathname: RoutePath.questions }; //создаем путь для возврата после авторизации (либо тот который хранится в стейте либо свой)
        return <Navigate replace to={from} />
    }

    //если регистрация, то редирект на страницу анкеты
    if (isRegister && user) {
        return <Navigate replace to={{ pathname: RoutePath.questions }} />;
    }

    //если компонент защищен то редирект на страницу логина
    if (!onlyOnAuth && !user) {
        
        return (
            <Navigate 
                replace to={{ pathname: RoutePath.auth_login }} 
                state={{ from: location }} 
            />
        )
    }

    //по умолчанию
    return <>{children}</>
}
