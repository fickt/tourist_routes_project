import React, {memo, useEffect} from "react";
import AppRouter from "pages/AppRouter";
import {Header} from "modules/header";
import {MobileHeader} from "modules/mobile-header";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {handleSetUser} from "modules/auth-form/store/authActions";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import s from "./styles.module.scss";
import {TUser} from "modules/auth-form";
import Cookies from "js-cookie";
import {getFavSpots} from "modules/favorites";
import {getSpots} from "modules/card-list";

const App = () => {

    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const token = Cookies.get("token");

    useEffect(() => {
        if (token) {
            const userData: TUser = {
                nickname: Cookies.get("nickname"),
                email: Cookies.get("email"),
            }
            dispatch(handleSetUser(userData));
        }
        const fetchData = async () => {
            await getFavSpots(dispatch);
            await getSpots(dispatch);
        }
        fetchData();
    }, [dispatch]);

    return (
        <div className={s.wrapper}>
            <Header/>
            {spotRoutes
                ? (<main><AppRouter/></main>)
                : (<div className={s.wrapper__loader}>
                    {loader && <PreloaderCar/>}
                    {!loader && (error && <ErrorMessage errorText={error}/>)}
                </div>)
            }
            <MobileHeader/>
        </div>
    )
}

export default memo(App);