import { Footer } from "antd/es/layout/layout";
import AppRouter from "pages/AppRouter";
import { useEffect, memo } from "react";
import { getLocalSpotsAction } from "modules/card-list/store/spotsActions";
import { useAppDispatch } from "storage/hookTypes";
import { Header } from "modules/header";
import { markers } from "components/ymap/constants/markers";

const App = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getLocalSpotsAction(markers))
    }, []);

    return (
        <>
            <Header />
            <main>
                <AppRouter />
            </main>
            <Footer><h2>Путешествия по Томску от стажеров Спутника</h2></Footer>
        </>
    )
}

export default memo(App);