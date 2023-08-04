import { Footer } from "antd/es/layout/layout";
import AppRouter from "components/app-router";
import Header from "components/header";
import { markers } from "components/ymap/markers";
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getLocalSpotsAction } from "storage/actions/spots-actions";
import { useAppDispatch } from "storage/hook-types";

export type TRoutes = {
    path: string,
    element: ReactNode,
}

const App = () => {

    const dispatch = useAppDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(getLocalSpotsAction(markers))
    }, [])

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

export default App;