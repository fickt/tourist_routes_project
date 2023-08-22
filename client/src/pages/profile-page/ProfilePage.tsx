import ArrowRightIcon from "./images/arrow-right.svg";
import s from "./styles.module.scss";
import { useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form/store/authSelectors";
import classNames from "classnames";
import { RoutePath } from "pages/routeConfig";

export const ProfilePage = () => {

    const user = useAppSelector(authUser);

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
                <a className={s.main__fav} href={RoutePath.mySpots}>
                    <span className={s.main__fav_text}>Мои места</span>
                </a>
                <a className={s.main__fav} href={RoutePath.favorites}>
                    <span className={s.main__fav_text}>Избранное</span>
                </a>
            </div>
            <h2 className={s.title}>Рекомендации</h2>
            <div className={s.recommendations}>
                <p className={s.recommendations_text}>Рекомендаций пока нет, для того чтобы они появились необходимо заполнить анкету.</p>
                <button className={classNames(s.recommendations_button, s.button)}>Анкета</button>
            </div>
            <button className={classNames(s.logout__button, s.button)}>Выйти из аккаунта</button>
        </div>
    )
}