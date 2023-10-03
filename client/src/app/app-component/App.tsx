import React, {memo, useEffect} from "react";
import AppRouter from "pages/AppRouter";
import {Header} from "modules/header";
import {MobileHeader} from "modules/mobile-header";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import s from "./styles.module.scss";
import {handleSetUser, TUser} from "modules/auth-form";
import Cookies from "js-cookie";
import {getSpots, spotsSelector} from "modules/card-list";
import {getFavSpots} from "modules/favorites";
import {isError, isLoader} from "components/loader-error";
import {handleStartPassQuestions} from "modules/questions";
import {getRoutesPass} from "modules/my-spots";

const App = () => {
    const dispatch = useAppDispatch();
    const spotRoutes = useAppSelector(spotsSelector);
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const token = Cookies.get("token");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        if (token) {
            const userData: TUser = {
                nickname: Cookies.get("nickname"),
                email: Cookies.get("email"),
                is_questionnaire_completed: Cookies.get("is_questionnaire_completed") === "true",
            };
            dispatch(handleStartPassQuestions(userData.is_questionnaire_completed));
            dispatch(handleSetUser(userData));
            await getFavSpots(dispatch);
            await getRoutesPass(dispatch);
        }
        await getSpots(dispatch);
    };

    return (
        <div className={s.wrapper}>
            <Header/>
            {spotRoutes
                ? (<main className={s.main}><AppRouter/></main>)
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