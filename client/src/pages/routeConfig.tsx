import { TRoutes } from "pages/types";
import { HomePage } from "./home-page/HomePage";
import { FavoritesPage } from "./favorites-page/FavoritesPage";
import { SpotsPage } from "./spots-page/SpotsPage";
import { AuthPage } from "./auth-page/AuthPage";
import { SpotPage } from "./spot-page/SpotPage";
import { ForgotPasswordPage } from "./forgot-password/ForgotPasswordPage";
import { NotFoundPage } from "./not-found-page/NotFoundPage";
import { ProfilePage } from "pages/profile-page/ProfilePage";
import { PrivateProfileRoute } from "pages/profile-page/PrivateProfileRoute";
import { ProtectedRoute } from "components/protected-route/ProtectedRoute";
import { LocationPage } from "./location-page/LocationPage";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    FAVORITES = "favorites",
    SPOTS = "spots",
    LOCATION = "location",
    SPOT_ID = "spotId",
    LOGIN = "login",
    REGISTER = "register",
    FORGOT_PASSWORD = "forgotPassword",    
    LOGOUT = "logout",
    AUTH_LOGIN = "auth_login",
    AUTH_REGISTER = "auth_register",
    AUTH_LOGOUT = "auth_logout",
    NOT_FOUND = "not_found", //в конце
}

export const RoutePath = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.FAVORITES]: "/favorites",
    [AppRoutes.SPOTS]: "/routes",
    [AppRoutes.LOCATION]: "/location",
    [AppRoutes.SPOT_ID]: "/spots/:spotId",
    [AppRoutes.AUTH_LOGIN]: "/auth/login",
    [AppRoutes.AUTH_REGISTER]: "/auth/register",
    [AppRoutes.AUTH_LOGOUT]: "/auth/logout",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTER]: "/register",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.LOGOUT]: "/logout",
    [AppRoutes.NOT_FOUND]: "*", //в конце
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },    
    { path: RoutePath.spots, element: <SpotsPage /> },
    { path: RoutePath.location, element: <LocationPage /> },
    { path: RoutePath.spotId, element: <SpotPage /> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
]

export const privateRoutes: TRoutes[] = [
    { path: RoutePath.profile, element: <ProtectedRoute ><ProfilePage /></ProtectedRoute> },
    { path: RoutePath.favorites, element: <ProtectedRoute ><FavoritesPage /></ProtectedRoute> },
    { path: RoutePath.auth_register, element: <ProtectedRoute onlyOnAuth><AuthPage isRegister={true} /></ProtectedRoute> },
    { path: RoutePath.auth_login, element: <ProtectedRoute onlyOnAuth><AuthPage isRegister={false} /></ProtectedRoute> },
    { path: RoutePath.forgotPassword, element: <ProtectedRoute onlyOnAuth><ForgotPasswordPage /></ProtectedRoute> },
] 