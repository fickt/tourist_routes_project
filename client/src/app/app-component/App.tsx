import { Footer } from "antd/es/layout/layout";
import AppRouter from "pages/AppRouter";
import React, { useEffect, memo } from "react";
import { getLocalSpotsAction, getSpotRoutes } from "modules/card-list/store/spotsActions";
import { useAppDispatch } from "storage/hookTypes";
import { Header } from "modules/header";
import { markers } from "components/ymap/constants/markers";
import { MobileHeader } from "modules/mobile-header";
import { localSpots } from "utils/localRoutes";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getSpotRoutes(localSpots));
    }, []);

    return (
        <>
            <Header />
            <main>
                <AppRouter />
            </main>
            <MobileHeader />
        </>
    )
}

export default memo(App);