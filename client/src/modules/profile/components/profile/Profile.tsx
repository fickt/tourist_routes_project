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
import {handleStartPassQuestions} from "modules/questions/store/questionsActions";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {profileValues} from "modules/profile/constants/profileValues";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {CardListBody} from "modules/card-list";

export const Profile = () => {

    const dispatch = useDispatch();
    const isStart = useAppSelector(isStartQuestions)
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const [questArray, setQuestArray] = useState<TLocalRoute[]>([])

    useEffect(() => {
        apiQuestions.fetchRecomendations()
            .then(data => {
                dispatch(handleAuthLoader(false))
                if (data.data.length > 0) {
                    dispatch(handleStartPassQuestions(true))
                    setQuestArray(data.data)
                }
            })
            .catch(() => {
                dispatch(handleAuthError("Ошибка получения рекомендованных мест"))
            })
    }, [])

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
                        extraClass={classNames("button", "button_white")}
                        disabled={loader}
                    >
                        Выйти из аккаунта
                    </Button>
                    {loader && <PreloaderCar/>}
                    {!loader && (error && <ErrorMessage errorText={error}/>)}
                </div>
            </div>
        </div>
    )
}