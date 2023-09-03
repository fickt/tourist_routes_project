import React, {memo, useEffect} from "react";
import AppRouter from "pages/AppRouter";
import {Header} from "modules/header";
import {MobileHeader} from "modules/mobile-header";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {AxiosResponse} from "axios";
import {TLocalRoute} from "utils/localRoutes";
import {apiSpots} from "modules/card-list/api/SpotsServise";
import {handleSpots} from "modules/card-list/store/spotsActions";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";

const App = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);

    useEffect(() => {
        const fetchData = async () => {
            dispatch(handleAuthLoader(true));
            try {
                const response: AxiosResponse<TLocalRoute[]> = await apiSpots.fetchSpots();
                dispatch(handleSpots(response.data));
            } catch (error) {
                if (error.response) {
                    dispatch(handleAuthError(error.response.data.error));
                } else {
                    dispatch(handleAuthError("Упс... Возникли проблемы с подгрузкой мест:("));
                }
            } finally {
                dispatch(handleAuthLoader(false));
            }
        }
        !spotRoutes && fetchData();
    }, [dispatch]);

    return (
        <>
            <Header/>
            {!spotRoutes
                ? (<>
                    {loader && <PreloaderCar/>}
                    {!loader && (error && <ErrorMessage errorText={error}/>)}
                </>)
                : (<main><AppRouter/></main>)
            }
            <MobileHeader/>
        </>
    )
}

export default memo(App);