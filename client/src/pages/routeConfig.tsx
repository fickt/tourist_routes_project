import {TRoutes} from "./types";
import {HomePage} from "./home-page/HomePage";
import {FavoritesPage} from "./favorites-page/FavoritesPage";
import {AuthPage} from "./auth-page/AuthPage";
import {SpotPage} from "./spot-page/SpotPage";
import {ForgotPasswordPage} from "./forgot-password/ForgotPasswordPage";
import {ProfilePage} from "./profile-page/ProfilePage";
import {MySpotsPage} from "./my-spots-page/MySpotsPage";
import {ProtectedRoute} from "components/protected-route/ProtectedRoute";
import {LocationPage} from "./location-page/LocationPage";
import {QuestionsPage} from "./questions-page/QuestionsPage";
import {FiltersPage} from "./filters-page/FiltersPage";
import {SettingsPage} from "./settings-page/SettingsPage";
import {SettingsPasswordPage} from "./settings-password-page/SettingsPasswordPage";
import {SpotMapPage} from "./spot-map-page/SpotMapPage";
import {NotFoundPage} from "./not-found-page/NotFoundPage";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    FAVORITES = "favorites",
    MY_SPOTS = "mySpots",
    QUESTIONS = "questions",
    SETTINGS = "settings",
    SETTINGS_PASSWORD = "settings_password",
    ROUTES = "routes",
    SPOT_ID = "spotId",
    SPOT_MAP = "spotMap",
    FILTERS = "filters",
    LOCATION = "location",
    FORGOT_PASSWORD = "forgotPassword",
    AUTH_LOGIN = "auth_login",
    AUTH_REGISTER = "auth_register",
    AUTH_LOGOUT = "auth_logout",
    NOT_FOUND = "not_found",
}

export const RoutePath = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.PROFILE]: "/profile",
    [AppRoutes.FAVORITES]: "/favorites",
    [AppRoutes.MY_SPOTS]: "/mySpots",
    [AppRoutes.FILTERS]: "/filters",
    [AppRoutes.QUESTIONS]: "/questions",
    [AppRoutes.SETTINGS]: "/settings",
    [AppRoutes.SETTINGS_PASSWORD]: "/settings_password",
    [AppRoutes.ROUTES]: "/routes",
    [AppRoutes.LOCATION]: "/location",
    [AppRoutes.AUTH_LOGIN]: "/auth/login",
    [AppRoutes.AUTH_REGISTER]: "/auth/register",
    [AppRoutes.AUTH_LOGOUT]: "/auth/logout",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.SPOT_ID]: "/spots/:spotId",
    [AppRoutes.SPOT_MAP]: "/spotMap/:spotId",
    [AppRoutes.NOT_FOUND]: "/not_found"
}

export const mainRoutes: TRoutes[] = [
    {path: RoutePath.home, element: <HomePage/>},
    {path: RoutePath.filters, element: <FiltersPage/>},
    {path: RoutePath.location, element: <LocationPage/>},
    {path: RoutePath.spotId, element: <SpotPage/>},
    {path: RoutePath.spotMap, element: <SpotMapPage/>},
    {path: RoutePath.forgotPassword, element: <ForgotPasswordPage/>},
    {path: RoutePath.not_found, element: <NotFoundPage/>},
    {path: "*", element: <NotFoundPage/>},
]

export const privateRoutes: TRoutes[] = [
    {path: RoutePath.profile, element: <ProtectedRoute><ProfilePage/></ProtectedRoute>},
    {path: RoutePath.mySpots, element: <ProtectedRoute><MySpotsPage/></ProtectedRoute>},
    {path: RoutePath.favorites, element: <ProtectedRoute><FavoritesPage/></ProtectedRoute>},
    {path: RoutePath.questions, element: <ProtectedRoute><QuestionsPage/></ProtectedRoute>},
    {path: RoutePath.settings, element: <ProtectedRoute><SettingsPage/></ProtectedRoute>},
    {path: RoutePath.settings_password, element: <ProtectedRoute><SettingsPasswordPage/></ProtectedRoute>},
    {path: RoutePath.auth_register, element: <ProtectedRoute onlyOnAuth isRegister><AuthPage isRegister={true}/></ProtectedRoute>},
    {path: RoutePath.auth_login, element: <ProtectedRoute onlyOnAuth><AuthPage/></ProtectedRoute>},
]