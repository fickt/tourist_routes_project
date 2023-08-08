import HomePage from "pages/home-page";
import NotFoundPage from "pages/not-found-page";
import SpotPage from "pages/spot-page";
import SpotsPage from "pages/spots-page";
import { Route, Routes } from "react-router-dom";
import { TRoutes } from "./router-types";
import { memo } from "react";

const AppRouter = () => {

    const mainRoutes: TRoutes[] = [
        { path: '/', element: <HomePage /> },
        { path: '/spots/*', element: <SpotsPage /> },
        { path: '/spots/:spotId/*', element: <SpotPage /> },
        { path: '*', element: <NotFoundPage /> },
    ]

    return (
        <Routes >
            {mainRoutes.map(({path, element}) => <Route path={path} element={element} key={path} />)}
        </Routes>)

}

export default memo(AppRouter);