import React, {memo} from "react";
import {Route, Routes} from "react-router-dom";
import {mainRoutes, privateRoutes} from "./routeConfig";
import {TRoutes} from "./types";

const AppRouter = () => {
    const routeMap = ({path, element}: TRoutes) => <Route path={path} element={element} key={path}/>

    return (
        <Routes>
            {mainRoutes.map(routeMap)}
            {privateRoutes.map(routeMap)}
        </Routes>
    )
}

export default memo(AppRouter);