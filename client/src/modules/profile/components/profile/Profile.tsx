import s from "./styles.module.scss";
import { RoutePath } from "pages/routeConfig";
import { Button } from "ui/button/Button";
import { useAppSelector} from "storage/hookTypes";
import { isRecommended } from "modules/questions/store/questionsSelectors";
import { ProfileHeader } from "modules/profile/components/profile-header/ProfileHeader";
import { ProfileSection } from "modules/profile/components/profile-section/ProfileSection";
import { PassQuestions } from "modules/questions/components/questions-popup/PassQuestions";

export const Profile = () => {

    const recommended = useAppSelector(isRecommended);

    return (
        <div className={s.profile}>
            <ProfileHeader text="Управление аккаунтом" path={RoutePath.settings} />
            <div className={s.main}>
                <ProfileSection path={RoutePath.mySpots} title="Мои места" />
                <ProfileSection path={RoutePath.favorites} title="Избранное" />
            </div>
            <h2 className={s.title}>Рекомендации</h2>
            {recommended ? "Сюда будут подгружены рекомендации пользователя с сервера" : <PassQuestions />}
            <Button>Выйти из аккаунта</Button>
        </div>
    )
}