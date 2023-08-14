import { TRoutes } from "./AppRouter";
import HomePage from "pages/home-page/HomePage";
import SpotsPage from "./spots-page/SpotsPage";
import SpotPage from "./spot-page/SpotPage";
import LoginPage from "./login-page/LoginPage";
import RegistrationPage from "./registration-page/RegistrationPage";
import ForgotPasswordPage from "./forgot-password/ForgotPasswordPage";
import NotFoundPage from "./not-found-page/NotFoundPage";

export enum AppRoutes {
    HOME = "home",
    SPOTS = "spots",
    SPOT_ID = "spotId",
    LOGIN = "login",
    REGISTRATION = "registration",
    FORGOT_PASSWORD = "forgotPassword",
    NOT_FOUND = "not_found",
    LOGOUT = "logout"
}

export const RoutePath = {
    [AppRoutes.HOME]: "/",
    [AppRoutes.SPOTS]: "/spots",
    [AppRoutes.SPOT_ID]: "/spots/:spotId/*",
    [AppRoutes.LOGIN]: "/login",
    [AppRoutes.REGISTRATION]: "/registration",
    [AppRoutes.FORGOT_PASSWORD]: "/forgotPassword",
    [AppRoutes.NOT_FOUND]: "*",
    [AppRoutes.LOGOUT]: "/logout"
}

export const mainRoutes: TRoutes[] = [
    { path: RoutePath.home, element: <HomePage /> },
    { path: RoutePath.spots, element: <SpotsPage /> },
    { path: RoutePath.spotId, element: <SpotPage /> },
    { path: RoutePath.login, element: <LoginPage /> },
    { path: RoutePath.registration, element: <RegistrationPage /> },
    { path: RoutePath.forgotPassword, element: <ForgotPasswordPage /> },
    { path: RoutePath.not_found, element: <NotFoundPage /> },
]