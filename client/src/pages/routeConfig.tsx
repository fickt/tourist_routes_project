import {TRoutes} from "pages/types";
import {HomePage} from "./home-page/HomePage";
import {FavoritesPage} from "./favorites-page/FavoritesPage";
import {SpotsPage} from "./spots-page/SpotsPage";
import {AuthPage} from "./auth-page/AuthPage";
import {SpotPage} from "./spot-page/SpotPage";
import {ForgotPasswordPage} from "./forgot-password/ForgotPasswordPage";
import {NotFoundPage} from "./not-found-page/NotFoundPage";
import {ProfilePage} from "pages/profile-page/ProfilePage";
import {MySpotsPage} from "pages/my-spots-page/MySpotsPage";
import {ProtectedRoute} from "components/protected-route/ProtectedRoute";
import {LocationPage} from "./location-page/LocationPage";
import {QuestionsPage} from "pages/questions-page/QuestionsPage";
import {FiltersPage} from "./filters-page/FiltersPage";
import {SettingsPage} from "pages/settings-page/SettingsPage";
import {SettingsInfoPage} from "pages/settings-info-page/SettingsInfoPage";
import {SettingsPasswordPage} from "pages/settings-password-page/SettingsPasswordPage";
import {SpotMapPage} from "pages/spot-map-page/SpotMapPage";

export enum AppRoutes {
    HOME = "home",
    PROFILE = "profile",
    FAVORITES = "favorites",
    MY_SPOTS = "mySpots",
    QUESTIONS = "questions",
    SETTINGS = "settings",
    SETTINGS_INFO = "settings_info",
    SETTINGS_PASSWORD = "settings_password",
    SPOTS = "spots",
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
    [AppRoutes.SETTINGS_INFO]: "/settings_info",
    [AppRoutes.SETTINGS_PASSWORD]: "/settings_password",
    [AppRoutes.SPOTS]: "/spots",
    [AppRoutes.ROUTES]: "/routes",
    [AppRoutes.LOCATION]: "/location",
    [AppRoutes.SPOT_ID]: "/spots/:spotId",
    [AppRoutes.SPOT_MAP]: "/spotMap/:spotId",
    [AppRoutes.AUTH_LOGIN]: "/auth/login",
    [AppRoutes.AUTH_REGISTER]: "/auth/register",
    [AppRoutes.AUTH_LOGOUT]: "/auth/logout",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.NOT_FOUND]: "*",
}

export const mainRoutes: TRoutes[] = [
    {path: RoutePath.home, element: <HomePage/>},
    {path: RoutePath.spots, element: <SpotsPage/>},
    {path: RoutePath.filters, element: <FiltersPage/>},
    {path: RoutePath.location, element: <LocationPage/>},
    {path: RoutePath.spotId, element: <SpotPage/>},
    {path: RoutePath.spotMap, element: <SpotMapPage/>},
    {path: RoutePath.not_found, element: <NotFoundPage/>},
]

export const privateRoutes: TRoutes[] = [
    {path: RoutePath.profile, element: <ProtectedRoute><ProfilePage/></ProtectedRoute>},
    {path: RoutePath.mySpots, element: <ProtectedRoute><MySpotsPage/></ProtectedRoute>},
    {path: RoutePath.favorites, element: <ProtectedRoute><FavoritesPage/></ProtectedRoute>},
    {path: RoutePath.questions, element: <ProtectedRoute><QuestionsPage/></ProtectedRoute>},
    {path: RoutePath.settings, element: <ProtectedRoute><SettingsPage/></ProtectedRoute>},
    {path: RoutePath.settings_info, element: <ProtectedRoute><SettingsInfoPage/></ProtectedRoute>},
    {path: RoutePath.settings_password, element: <ProtectedRoute><SettingsPasswordPage/></ProtectedRoute>},
    {path: RoutePath.auth_register, element: <ProtectedRoute onlyOnAuth isRegister><AuthPage isRegister={true}/></ProtectedRoute>},
    {path: RoutePath.auth_login, element: <ProtectedRoute onlyOnAuth><AuthPage/></ProtectedRoute>},
    {path: RoutePath.forgotPassword, element: <ProtectedRoute onlyOnAuth><ForgotPasswordPage/></ProtectedRoute>},
]