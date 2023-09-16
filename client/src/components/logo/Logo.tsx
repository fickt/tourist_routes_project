import React, {SyntheticEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import s from "./styles.module.scss";
import {Typography} from "antd";
import BackIcon from "./assets/backIcon.svg";
import {useAppSelector} from "storage/hookTypes";

const {Title} = Typography;

export const Logo = () => {
    const {spotId} = useAppSelector(state => state.spotId)
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
        case "/":
            return "Наши маршруты";
        case "/auth/login":
            return "Войти";
        case "/auth/register":
            return "Регистрация";
        case "/profile":
            return "Личный кабинет";
        case "/favorites":
            return "Избранное";
        case `/mySpots`:
            return "Мои места";
        case "/filters":
            return "Фильтр";
        case "/location":
            return "Ближайшие места";
        case "/settings":
            return "Управление аккаунтом";
        case "/settings_info":
            return "Управление аккаунтом";
        case `/spotMap/:${spotId}`:
            return "Маршрут";
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