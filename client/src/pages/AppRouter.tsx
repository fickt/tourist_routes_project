import React, { ReactNode, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { mainRoutes } from "./routeConfig";

export type TRoutes = {
    path: string,
    element: ReactNode,
}

const AppRouter = () => {

    return (
        <Routes >
            {mainRoutes.map(({path, element}) => <Route path={path} element={element} key={path} />)}
        </Routes>)

}

export default memo(AppRouter);