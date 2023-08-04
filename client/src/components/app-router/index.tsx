import { TRoutes } from "components/app";
import HomePage from "pages/home-page";
import NotFoundPage from "pages/not-found-page";
import SpotPage from "pages/spot-page";
import SpotsPage from "pages/spots-page";
import { Route, Routes, useLocation } from "react-router-dom";



const AppRouter = () => {

    const location = useLocation();
    const initialPath = location.state?.initialPath;
    const backgroundLocation = location.state?.backgroundLocation;   
    
    const mainRoutes: TRoutes[] = [
        { path: '/', element: <HomePage /> },
        { path: '/spots/*', element: <SpotsPage /> },
        { path: '/spots/:spotId/*', element: <SpotPage /> },
        { path: '*', element: <NotFoundPage /> },
    ]

    return (
        <Routes location={backgroundLocation && { ...backgroundLocation, pathname: initialPath } || location}>
            {mainRoutes.map(({ path, element }) => <Route path={path} element={element} key={path} />)}
        </Routes>)

}

export default AppRouter;




