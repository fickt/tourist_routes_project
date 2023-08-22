import React, { memo, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { mainRoutes, privateRoutes } from "./routeConfig";
import { TRoutes } from "./types";
import Cookies from "js-cookie";
import { useAppDispatch } from "storage/hookTypes";
import { TUser } from "modules/auth-form/store/types/authTypes";
import { handleSetUser } from "modules/auth-form/store/authActions";

const AppRouter = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (Cookies.get("token")) {
            const userData: TUser = {
                nickname: Cookies.get("nickname"),
                email: Cookies.get("email"),
            }
            dispatch(handleSetUser(userData));
        }
    }, [])

    const routeMap = ({path, element}: TRoutes) => <Route path={path} element={element} key={path} />

    return (
        <Routes >
            {mainRoutes.map(routeMap)}
            {privateRoutes.map(routeMap)}
        </Routes>
    )
}

export default memo(AppRouter);