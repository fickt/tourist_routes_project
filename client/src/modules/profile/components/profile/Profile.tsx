import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {isStartQuestions} from "modules/questions/store/questionsSelectors";
import {ProfileHeader} from "modules/profile/components/profile-header/ProfileHeader";
import {ProfileSection} from "modules/profile/components/profile-section/ProfileSection";
import {PassQuestions} from "modules/questions/components/pass-questions/PassQuestions";
import {Link} from "react-router-dom";
import classNames from "classnames";
import {useEffect, useState} from "react";
import {TLocalRoute} from "utils/localRoutes";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {useDispatch} from "react-redux";
import {handleStartPassQuestions} from "modules/questions/store/questionsActions";
import {CardListComponent} from "modules/card-list/components/card-list-component/CardListComponent";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {profileValues} from "modules/profile/constants/profileValues";

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
            {!error && !loader && <CardListComponent spots={questArray}/>}
            {error && <p>{error}</p>}
            <div className="buttons__wrapper">
                <Link to={RoutePath.auth_login} className="buttons__link">
                    <Button extraClass={classNames("button", "button_white")}>Выйти из аккаунта</Button>
                </Link>
            </div>
        </div>
    )
}