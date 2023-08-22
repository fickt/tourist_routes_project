import React, { useEffect } from "react";
import ArrowRightIcon from "./images/arrow-right.svg";
import s from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "storage/hookTypes";
import { authUser } from "modules/auth-form/store/authSelectors";
import classNames from "classnames";
import Cookies from "js-cookie";
import { TUser } from "modules/auth-form/store/types/authTypes";
import { handleSetUser } from "modules/auth-form/store/authActions";
import { RoutePath } from "pages/routeConfig";

export const ProfilePage = () => {

    const dispatch = useAppDispatch();
    const user = useAppSelector(authUser);

    useEffect(() => {
        if (Cookies.get("token")) {
            const userData: TUser = {
                nickname: Cookies.get("nickname"),
                email: Cookies.get("email"),
            }
            dispatch(handleSetUser(userData));
        }
    }, [])

    return (
        <div className={s.wrapper}>
            <div className={s.header}>
                <div className={s.header__info}>
                    <div className={s.header__info_wrapper}>
                        {user
                            ? <span className={s.header__info_text}>{user.nickname[0]}</span>
                            : <span className={s.header__info_text}>Н</span>
                        }
                    </div>
                    <div className={s.settings}>
                        {user
                            ? <h2 className={s.title}>{user.nickname}</h2>
                            : <h2 className={s.title}>Никнейм</h2>
                        }
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