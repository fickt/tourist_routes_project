import s from "./styles.module.scss";
import { RoutePath } from "pages/routeConfig";
import { Button } from "ui/button/Button";
import { useAppSelector} from "storage/hookTypes";
import { isRecommended } from "modules/questions/store/questionsSelectors";
import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";
import { ProfileSection } from "modules/profile/components/profile-section/ProfileSection";
import { PassQuestions } from "modules/questions/components/pass-questions/PassQuestions";
import { Link } from "react-router-dom";
import classNames from "classnames";

export const Profile = () => {

    const recommended = useAppSelector(isRecommended);

    return (
        <div className={s.profile}>
            <ProfileHeader path={RoutePath.settings} />
            <div className={s.profile__main}>
                <ProfileSection path={RoutePath.mySpots} title="Мои места" />
                <ProfileSection path={RoutePath.favorites} title="Избранное" />
            </div>
            <h2>Рекомендации</h2>
            {recommended ? "Сюда будут подгружены рекомендации пользователя с сервера" : <PassQuestions />}
            <div className="buttons__wrapper">
                <Link to={RoutePath.auth_login} className="buttons__link">
                    <Button extraClass={classNames("button", "button_white")}>Выйти из аккаунта</Button>
                </Link>
            </div>
        </div>
    )
}