import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import { RoutePath } from "pages/routeConfig";
import { PrivateProfileRouteProps } from "pages/profile-page/type";

export const PrivateProfileRoute = ({ children }: PrivateProfileRouteProps) => {

    return Cookies.get("token") ? children : <Navigate to={RoutePath.auth_login} />;
};