import React, {useEffect, useState} from "react";
import s from "./styles.module.scss";
import {RoutePath} from "pages/routeConfig";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {isRecommended} from "modules/questions/store/questionsSelectors";
import {ProfileHeader} from "modules/profile/components/profile-header/ProfileHeader";
import {ProfileSection} from "modules/profile/components/profile-section/ProfileSection";
import {PassQuestions} from "modules/questions/components/pass-questions/PassQuestions";
import {useNavigate} from "react-router-dom";
import classNames from "classnames";
import {TLocalRoute} from "utils/localRoutes";
import {apiQuestions} from "modules/questions/api/QuestionsServise";
import {useDispatch} from "react-redux";
import {handleRecommended} from "modules/questions/store/questionsActions";
import {CardListComponent} from "modules/card-list/components/card-list-component/CardListComponent";
import Cookies from "js-cookie";
import {authService} from "modules/auth-form/api/authService";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import {handleAuthError, handleAuthLoader} from "modules/auth-form/store/authActions";
import {TServerResponse} from "modules/auth-form/store/types/authTypes";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";

export const Profile = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const recommended = useAppSelector(isRecommended);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);
    const [questArray, setQuestArray] = useState<TLocalRoute[]>([]);

    useEffect(() => {
        !Cookies.get("token") && navigate(RoutePath.auth_login);
        apiQuestions.fetchRecomendations()
            .then(data => {
                setQuestArray(data.data)
                if (data.data.length > 0) {
                    dispatch(handleRecommended(true))
                }
            })
            .catch(err => console.warn(err))
    }, []);

    const logout = async (): Promise<void> => {
        dispatch(handleAuthLoader(true)); // включить loader
        try {
            await authService.logout();
            Object.keys(Cookies.get()).forEach(cookieName => {
                Cookies.remove(cookieName);
            });
            navigate(RoutePath.home);
        } catch (e: Error | TServerResponse) {
            dispatch(handleAuthError(e.response.data.error));
        } finally {
            dispatch(handleAuthLoader(false)); // выключить loader
        }
    };

    return (
        <div className={s.profile}>
            <ProfileHeader path={RoutePath.settings}/>
            <div className={s.profile__main}>
                <ProfileSection path={RoutePath.mySpots} title="Мои места"/>
                <ProfileSection path={RoutePath.favorites} title="Избранное"/>
            </div>
            <h2>Рекомендации</h2>
            {recommended ? "Сюда будут подгружены рекомендации пользователя с сервера" : <PassQuestions/>}
            {recommended && (
                <CardListComponent spots={questArray}/>
            )}
            <div className="buttons__wrapper">
                <div className="buttons__link">
                    <Button
                        action={logout}
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