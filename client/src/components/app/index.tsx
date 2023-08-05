import { Footer } from "antd/es/layout/layout";
import AppRouter from "components/app-router";
import Header from "components/header";
import { markers } from "components/ymap/markers";
import React, { useEffect } from "react";
import { getLocalSpotsAction } from "storage/actions/spots-actions";
import { useAppDispatch } from "storage/hook-types";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLocalSpotsAction(markers))
    }, []);

    return (
        <>
            <Header />
            <main className='container'>
                <AppRouter />
            </main>
            <Footer><h2>Путешествия по Томску от стажеров Спутника</h2></Footer>
        </>
    )
}

export default React.memo(App);