import HomePage from "pages/home-page/HomePage";
import SpotsPage from "./spots-page/SpotsPage";
import SpotPage from "./spot-page/SpotPage";
import ForgotPasswordPage from "./forgot-password/ForgotPasswordPage";
import NotFoundPage from "./not-found-page/NotFoundPage";
import ProfilePage from "./profile-page/ProfilePage";
import FavoritesPage from "./favorites-page/FavoritesPage";
import AuthPage from "pages/auth-page/AuthPage";
import { TRoutes } from "pages/types";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    FAVORITES = "favorites",
    SPOTS = "spots",
    SPOT_ID = "spotId",
    LOGIN = "login",
    REGISTRATION = "register",
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
    [AppRoutes.REGISTRATION]: "/register",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.LOGOUT]: "/logout",
    [AppRoutes.NOT_FOUND]: "*", //в конце
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },
    { path: RoutePath.profile, element: <ProfilePage /> },
    { path: RoutePath.favorites, element: <FavoritesPage /> },
    { path: RoutePath.spots, element: <SpotsPage /> },
    { path: RoutePath.spotId, element: <SpotPage /> },
    { path: RoutePath.auth_register, element: <AuthPage isRegister={true} /> },
    { path: RoutePath.auth_login, element: <AuthPage isRegister={false} /> },
    { path: RoutePath.forgotPassword, element: <ForgotPasswordPage /> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
]