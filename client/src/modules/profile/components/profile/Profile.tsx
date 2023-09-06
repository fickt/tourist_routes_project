import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {isRecommended, isStartQuestions} from "modules/questions/store/questionsSelectors";
import {ProfileHeader} from "modules/profile/components/profile-header/ProfileHeader";
import { ProfileSection } from "modules/profile/components/profile-section/ProfileSection";
import { PassQuestions } from "modules/questions/components/pass-questions/PassQuestions";
import { Link } from "react-router-dom";
import classNames from "classnames";
import {useEffect, useState} from "react";
import {TLocalRoute} from "utils/localRoutes";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {useDispatch} from "react-redux";
import {handleRecommended} from "modules/questions/store/questionsActions";
import {CardListComponent} from "modules/card-list/components/card-list-component/CardListComponent";
import {PreloaderCar} from "ui/preloader/PreloaderCar";

export const Profile = () => {
    const dispatch = useDispatch();
    const recommended = useAppSelector(isRecommended);
    const isStart = useAppSelector(isStartQuestions)
    const [questArray, setQuestArray] = useState<TLocalRoute[]>([])
    useEffect(() => {
        apiQuestions.fetchRecomendations()
            .then(data => {
                setQuestArray(data.data)
                if(data.data.length > 0) {
                    dispatch(handleRecommended(false))
                }
            })
            .catch(err => console.warn(err))
    }, [])

    return (
        <div className={s.profile}>
            <ProfileHeader path={RoutePath.settings} />
            <div className={s.profile__main}>
                <ProfileSection path={RoutePath.mySpots} title="Мои места" />
                <ProfileSection path={RoutePath.favorites} title="Избранное" />
            </div>
            <h2>Рекомендации</h2>
            {!isStart && <PassQuestions />}
            {isStart && recommended && (
                <PreloaderCar/>
            )}
            {!recommended && (
                <CardListComponent spots={questArray}/>
            )}
            <div className="buttons__wrapper">
                <Link to={RoutePath.auth_login} className="buttons__link">
                    <Button extraClass={classNames("button", "button_white")}>Выйти из аккаунта</Button>
                </Link>
            </div>
        </div>
    )
}