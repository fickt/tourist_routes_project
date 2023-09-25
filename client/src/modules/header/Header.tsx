import React, {SyntheticEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import s from "./styles.module.scss";
import {Typography} from "antd";
import BackIcon from "./assets/backIcon.svg";
import {useAppSelector} from "storage/hookTypes";
import {RoutePath} from "pages/routeConfig";
import {headers} from "modules/header/constants/constants";

const {Title} = Typography;

export const Header = () => {
    const {spotId} = useAppSelector(state => state.spotId);
    const location = useLocation();

    const goBack = (e: SyntheticEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        window.history.back();
    };

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        location.pathname === RoutePath.home && e.preventDefault();
    };

    const shouldRenderBackIcon = () => {
        return location.pathname !== `${RoutePath.home}` &&
            location.pathname !== `${RoutePath.profile}` &&
            location.pathname !== `${RoutePath.auth_login}` &&
            location.pathname !== `${RoutePath.questions}`;
    };

    const nameOfPage = () => {
        switch (location.pathname) {
            case `${RoutePath.home}`:
                return headers.ourRoutes;
            case `${RoutePath.auth_login}`:
                return headers.logo;
            case `${RoutePath.auth_register}`:
                return headers.logo;
            case `${RoutePath.profile}`:
                return headers.profile;
            case `${RoutePath.favorites}`:
                return headers.favorites;
            case `${RoutePath.mySpots}`:
                return headers.mySpots;
            case `${RoutePath.filters}`:
                return headers.filters;
            case `${RoutePath.location}`:
                return headers.nearest;
            case `${RoutePath.settings}`:
                return headers.settingsInfo;
            case `${RoutePath.spotMap}:${spotId}`:
                return headers.route;
            case `${RoutePath.settings_password}`:
                return headers.changePassword;
            case `${RoutePath.questions}`:
                return headers.logo;
            default:
                return headers.aboutSpot;
        }
    }

    return (
        <div className={s.wrapper}>
            {shouldRenderBackIcon() && <a className={s.back} onClick={goBack}><BackIcon className={s.back__icon}/></a>}
            <Link to={RoutePath.home} className={s.logo} onClick={handleClick}>
                <Title level={2}>{nameOfPage()}</Title>
            </Link>
        </div>
    );
};