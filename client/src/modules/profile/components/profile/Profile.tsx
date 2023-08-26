import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { Button } from "ui/button/Button";
import { useAppSelector} from "storage/hookTypes";
import { isRecommended } from "modules/questions/store/questionsSelectors";
import { QuestionsPopup } from "modules/questions/components/questions-popup/QuestionsPopup";
import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";

export const Profile = () => {

    const recommended = useAppSelector(isRecommended);

    return (
        <div className={s.profile}>
            <ProfileHeader text="Управление аккаунтом" path={RoutePath.settings} />
            <div className={s.main}>
                <Link className={s.main__fav} to={RoutePath.mySpots}>
                    <span className={s.main__fav_text}>Мои места</span>
                </Link>
                <Link className={s.main__fav} to={RoutePath.favorites}>
                    <span className={s.main__fav_text}>Избранное</span>
                </Link>
            </div>
            <h2 className={s.title}>Рекомендации</h2>
            {recommended ? "Сюда будут подгружены рекомендации пользователя с сервера" : <QuestionsPopup />}
            <Button>Выйти из аккаунта</Button>
        </div>
    )
}