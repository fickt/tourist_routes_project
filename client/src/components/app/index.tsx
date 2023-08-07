import { Footer } from "antd/es/layout/layout";
import AppRouter from "components/app-router";
import Header from "modules/header/components";
import { markers } from "modules/ymap/constants/markers";
import { useEffect, memo } from "react";
import { getLocalSpotsAction } from "modules/card-list/store/spots-actions";
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

export default memo(App);