import React, {useEffect, useState} from "react";
import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {isStartQuestions} from "modules/questions/store/questionsSelectors";
import {ProfileHeader} from "modules/profile/components/profile-header/ProfileHeader";
import {ProfileSection} from "modules/profile/components/profile-section/ProfileSection";
import {PassQuestions} from "modules/questions/components/pass-questions/PassQuestions";
import classNames from "classnames";
import {TLocalRoute} from "utils/localRoutes";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {useDispatch} from "react-redux";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {errorProfile, profileValues} from "modules/profile/constants/profileValues";
import {CardListBody} from "modules/card-list";
import {useNavigate} from "react-router-dom";
import {authService} from "modules/auth-form/api/authService";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import Cookies from "js-cookie";
import {setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {isError, isLoader, setError, setLoader} from "components/loader-error";

export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isStart = useAppSelector(isStartQuestions);
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const [questArray, setQuestArray] = useState<TLocalRoute[]>([]);

    useEffect(() => {
        apiQuestions.fetchRecomendations()
            .then(data => {
                dispatch(setLoader(false));
                data.data.length && setQuestArray(data.data);
            })
            .catch(() => {
                dispatch(setError(errorProfile.recommended));
            })
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
            <h2>Рекомендации</h2>
            {!isStart && <PassQuestions/>}
            {loader && <PreloaderCar/>}
            {!error && !loader && <CardListBody spots={questArray}/>}
            {error && <p>{error}</p>}
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button
                        action={logout}
                        extraClass={classNames("button", "button_white")}
                        disabled={loader}
                    >
                        Выйти из аккаунта
                    </Button>
                </div>
            </div>
        </div>
    )
}