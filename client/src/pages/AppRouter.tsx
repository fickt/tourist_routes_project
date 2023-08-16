import React, { memo } from "react";
import { Route, Routes } from "react-router-dom";
import { mainRoutes } from "./routeConfig";

const AppRouter = () => {

    return (
        <Routes >
            {mainRoutes.map(({path, element}) => <Route path={path} element={element} key={path} />)}
        </Routes>)
}

export default memo(AppRouter);