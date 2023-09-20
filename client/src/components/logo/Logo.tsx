import React, {SyntheticEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import s from "./styles.module.scss";
import {Typography} from "antd";
import BackIcon from "./assets/backIcon.svg";
import {AppRoutes, RoutePath} from "pages/routeConfig";

const {Title} = Typography;

export const Logo = () => {
    const location = useLocation();
    const goBack = (e: SyntheticEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        window.history.back();
    };

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        location.pathname === "/" && e.preventDefault();
    };
    const shouldRenderBackIcon = () => {
        return location.pathname !== "/" &&
            location.pathname !== "/profile" &&
            location.pathname !== "/auth/login" &&
            location.pathname !== "/questions";
    };

    const nameOfPage = () => {
        switch (location.pathname) {
        case RoutePath[AppRoutes.HOME]:
            return "Наши маршруты";
        case RoutePath[AppRoutes.AUTH_LOGIN]:
            return "Войти";
        case RoutePath[AppRoutes.AUTH_REGISTER]:
            return "Регистрация";
        case RoutePath[AppRoutes.PROFILE]:
            return "Личный кабинет";
        case RoutePath[AppRoutes.FAVORITES]:
            return "Избранное";
        case RoutePath[AppRoutes.MY_SPOTS]:
            return "Мои места";
        case RoutePath[AppRoutes.FILTERS]:
            return "Фильтр";
        case RoutePath[AppRoutes.LOCATION]:
            return "Ближайшие места";
        case RoutePath[AppRoutes.SETTINGS]:
            return "Управление аккаунтом";
        case RoutePath[AppRoutes.SETTINGS_INFO]:
            return "Управление аккаунтом";
        case RoutePath[AppRoutes.SPOT_MAP]:
            return "Маршрут";
        case RoutePath[AppRoutes.QUESTIONS]:
            return "Анкета";
        default:
            return "О месте";
        }
    }

    return (
        <>
            <Link to={"/"} className={s.logo} onClick={handleClick}>
                <Title level={2} className={s.logo__text}>{nameOfPage()}</Title>
            </Link>

            {shouldRenderBackIcon() && (
                <a className={s.back} onClick={goBack}><BackIcon className={s.back__icon}/></a>
            )}
        </>
    );
};