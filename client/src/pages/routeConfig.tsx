import { TRoutes } from "pages/types";
import { HomePage } from "./home-page/HomePage";
import { ProfilePage } from "./profile-page/ProfilePage";
import { FavoritesPage } from "./favorites-page/FavoritesPage";
import { SpotsPage } from "./spots-page/SpotsPage";
import { AuthPage } from "./auth-page/AuthPage";
import { SpotPage } from "./spot-page/SpotPage";
import { ForgotPasswordPage } from "./forgot-password/ForgotPasswordPage";
import { NotFoundPage } from "./not-found-page/NotFoundPage";
import { ProtectedRoute } from "components/protected-route/ProtectedRoute";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    FAVORITES = "favorites",
    SPOTS = "spots",
    SPOT_ID = "spotId",
    LOGIN = "login",
    REGISTER = "register",
    FORGOT_PASSWORD = "forgotPassword",    
    LOGOUT = "logout",
    AUTH_LOGIN = "auth_login",
    AUTH_REGISTER = "auth_register",
    NOT_FOUND = "not_found", //в конце
}

export const RoutePath = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.FAVORITES]: "/favorites",
    [AppRoutes.SPOTS]: "/routes",
    [AppRoutes.SPOT_ID]: "/spots/:spotId/*",
    [AppRoutes.AUTH_LOGIN]: "/auth/login",
    [AppRoutes.AUTH_REGISTER]: "/auth/register",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTER]: "/register",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.LOGOUT]: "/logout",
    [AppRoutes.NOT_FOUND]: "*", //в конце
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },
    { path: RoutePath.profile, element: <ProtectedRoute><ProfilePage /></ProtectedRoute> },
    { path: RoutePath.favorites, element: <FavoritesPage /> },
    { path: RoutePath.spots, element: <SpotsPage /> },
    { path: RoutePath.spotId, element: <SpotPage /> },
    { path: RoutePath.auth_register, element: <ProtectedRoute onlyOnAuth><AuthPage isRegister={true} /></ProtectedRoute> },
    { path: RoutePath.auth_login, element: <ProtectedRoute onlyOnAuth><AuthPage isRegister={false} /></ProtectedRoute> },
    { path: RoutePath.forgotPassword, element: <ProtectedRoute onlyOnAuth><ForgotPasswordPage /></ProtectedRoute> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
]