import {Navigate} from "react-router-dom";
import {TProtectedRouteProps} from "./types";
import {RoutePath} from "pages/routeConfig";
import {useAppSelector} from "storage/hookTypes";
import {isRecommended} from "modules/questions";
import {authUser} from "modules/auth-form";
import Cookies from "js-cookie";

export const ProtectedRoute = ({onlyOnAuth, isRegister, children}: TProtectedRouteProps) => {

    const user = useAppSelector(authUser);
    const recommended = useAppSelector(isRecommended);

    if (onlyOnAuth && user) {
        // если логин и у пользователя есть рекомендации, то редирект на страницу home
        if (!isRegister && user && recommended) {
            return <Navigate replace to={{pathname: RoutePath.home}}/>;
        } else if (!isRegister && user && Cookies.get("is_questionnaire_completed") === "true") {
            return <Navigate replace to={{pathname: RoutePath.profile}}/>

        } else {
            return <Navigate replace to={{pathname: RoutePath.questions}}/>
        }
    }
    //если компонент защищен то редирект на страницу логина
    if (!onlyOnAuth && !user) {
        return (
            <Navigate
                replace to={{pathname: RoutePath.auth_login}}
            />
        )
    }
    //по умолчанию
    return <>{children}</>
}
