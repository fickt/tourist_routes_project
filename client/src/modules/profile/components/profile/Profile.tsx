import React, {useEffect, useState} from "react";
import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {ProfileHeader} from "modules/profile/components/profile-header/ProfileHeader";
import {ProfileSection} from "modules/profile/components/profile-section/ProfileSection";
import classNames from "classnames";
import {TLocalRoute} from "utils/localRoutes";
import {useDispatch} from "react-redux";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {errorProfile, logoutText, profileValues} from "modules/profile/constants/profileValues";
import {CardListBody} from "modules/card-list";
import {useNavigate} from "react-router-dom";
import Cookies from "js-cookie";
import {isError, isLoader, setError, setLoader} from "components/loader-error";
import {apiQuestions, PassQuestions} from "modules/questions";
import {authService, TServerResponse} from "modules/auth-form";
import {setFavoriteSpots} from "modules/favorites";
import {ErrorMessage} from "ui/error-message/ErrorMessage";

export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isStart = Cookies.get("is_questionnaire_completed")
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const [questArray, setQuestArray] = useState<TLocalRoute[]>([]);

    useEffect(() => {
        dispatch(setError(""))
        dispatch(setLoader(false));
        if (isStart === "true") {
            dispatch(setLoader(true));
            apiQuestions.fetchRecommendations()
                .then(data => {
                    dispatch(setLoader(false));
                    data.data.length && setQuestArray(data.data);
                })
                .catch(() => {
                    dispatch(setError(errorProfile.recommended));
                })
        }
    }, [])

    const logout = async (): Promise<void> => {
        dispatch(setLoader(true));
        try {
            await authService.logout();
            Object.keys(Cookies.get()).forEach(cookieName => {
                Cookies.remove(cookieName);
            });
            dispatch(setFavoriteSpots(null));
            navigate(RoutePath.home);
            window.location.reload();
        } catch (e: Error | TServerResponse) {
            dispatch(setError(e.response.data.error));
        } finally {
            dispatch(setLoader(false));
        }
    };

    return (
        <div className={s.profile}>
            <ProfileHeader path={RoutePath.settings}/>
            <div className={s.profile__main}>
                <ProfileSection path={RoutePath.mySpots} title={profileValues.places}/>
                <ProfileSection path={RoutePath.favorites} title={profileValues.favorite}/>
            </div>
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button
                        action={logout}
                        extraClass={classNames("button", "button_white")}
                        disabled={loader}
                    >
                        {logoutText}
                    </Button>
                </div>
            </div>
            {isStart === "false" && <PassQuestions/>}
            {!loader && error && <ErrorMessage errorText={error}/>}
            {loader && <PreloaderCar/>}
            {questArray.length > 0 && !error && !loader && <CardListBody spots={questArray}/>}
        </div>
    )
}