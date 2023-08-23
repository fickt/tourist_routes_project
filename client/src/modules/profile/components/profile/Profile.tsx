import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";
import { Button } from "ui/button/Button";
import { useAppSelector} from "storage/hookTypes";
import { authUser } from "modules/auth-form/store/authSelectors";
import ArrowRightIcon from "./assets/arrow-right.svg";
import { isRecommended } from "modules/questions/store/questionsSelectors";
import { QuestionsPopup } from "modules/questions/components/questions-popup/QuestionsPopup";

export const Profile = () => {

    const user = useAppSelector(authUser);
    const recommended = useAppSelector(isRecommended);

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.header__info}>
                    <div className={s.header__info_wrapper}>
                        {user && <span className={s.header__info_text}>{user.nickname[0]}</span>}
                    </div>
                    <div className={s.settings}>
                        {user && <h2 className={s.title}>{user.nickname}</h2>}
                        <p>Управление аккаунтом</p>
                    </div>
                </div>
                <ArrowRightIcon className={s.icon__right} />
            </div>
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