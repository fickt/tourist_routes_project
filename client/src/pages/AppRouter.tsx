import HomePage from "pages/home-page/HomePage";
import NotFoundPage from "pages/not-found-page/NotFoundPage";
import SpotPage from "pages/spot-page/SpotPage";
import SpotsPage from "pages/spots-page/SpotsPage";
import { Route, Routes } from "react-router-dom";
import { ReactNode, memo } from "react";

type TRoutes = {
    path: string,
    element: ReactNode,
}

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