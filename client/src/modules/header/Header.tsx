import React, {SyntheticEvent} from "react";
import {Link, useLocation} from "react-router-dom";
import s from "./styles.module.scss";
import {Typography} from "antd";
import BackIcon from "./assets/backIcon.svg";
import {RoutePath} from "pages/routeConfig";
import {headers, pathToHeader} from "modules/header/constants/constants";

const {Title} = Typography;

export const Header = () => {
    const location = useLocation();

    const goBack = (e: SyntheticEvent<HTMLAnchorElement>) => {
        e.stopPropagation();
        window.history.length > 1
            ? window.history.back()
            : window.location.href = `${RoutePath.home}`;
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
        const header = pathToHeader[location.pathname] || headers.logo;

        if (location.pathname.startsWith(headers.spotId)) {
            return headers.aboutSpot;
        } else if (location.pathname.startsWith(headers.spotMap)) {
            return headers.route;
        }
        return header;
    }

    return (
        <div className={s.wrapper}>
            {shouldRenderBackIcon() && <a className={s.back} onClick={goBack}>
                <BackIcon className={s.back__icon}/>
            </a>}
            <Link to={RoutePath.home} className={s.logo} onClick={handleClick}>
                <Title level={2}>{nameOfPage()}</Title>
            </Link>
        </div>
    );
};