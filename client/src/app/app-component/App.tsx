import React, { useEffect, memo } from "react";
import AppRouter from "pages/AppRouter";
import { handleSpots } from "modules/card-list/store/spotsActions";
import { useAppDispatch } from "storage/hookTypes";
import { Header } from "modules/header";
import { MobileHeader } from "modules/mobile-header";
import { localSpots } from "utils/localRoutes";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(handleSpots(localSpots));
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