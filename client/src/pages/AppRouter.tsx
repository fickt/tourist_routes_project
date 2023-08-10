import React, { ReactNode, memo } from "react";
import HomePage from "pages/home-page/HomePage";
import NotFoundPage from "pages/not-found-page/NotFoundPage";
import SpotPage from "pages/spot-page/SpotPage";
import SpotsPage from "pages/spots-page/SpotsPage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "pages/login-page/LoginPage";
import RegistrationPage from "pages/registration-page/RegistrationPage";
import ForgotPasswordPage from "pages/forgot-password/ForgotPasswordPage";

type TRoutes = {
    path: string,
    element: ReactNode,
}

const AppRouter = () => {

    const mainRoutes: TRoutes[] = [
        { path: "/", element: <HomePage /> },
        { path: "/spots/*", element: <SpotsPage /> },
        { path: "/spots/:spotId/*", element: <SpotPage /> },
        { path: "/login", element: <LoginPage /> },
        { path: "/registration", element: <RegistrationPage /> },
        { path: "/forgotPassword", element: <ForgotPasswordPage /> },
        { path: "*", element: <NotFoundPage /> },
    ]

    return (
        <Routes >
            {mainRoutes.map(({path, element}) => <Route path={path} element={element} key={path} />)}
        </Routes>)

}

export default memo(AppRouter);