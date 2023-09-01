import React, { SyntheticEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.scss";
import { Typography } from "antd";
import BackIcon from "./assets/backIcon.svg";

const { Title } = Typography;

export const Logo = () => {

    const location = useLocation();
    const goBack = () => window.history.back();

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        location.pathname === "/" && e.preventDefault();
    };

    const shouldRenderBackIcon = () => {
        return location.pathname !== "/" &&
            location.pathname !== "/profile" &&
            location.pathname !== "/auth/login" &&
            location.pathname !== "/questions";
    };

    const shouldNotRenderLogo = () => {
        return location.pathname !== "/spots/*";
    };

    return (
        <>
            {shouldRenderBackIcon() && (
                <a className={s.back} onClick={goBack}><BackIcon className={s.back__icon} /></a>)
            }
            {shouldNotRenderLogo
                ? (<div className={s.logo}><h2 className={s.logo__title}>О месте</h2></div>)
                : (<Link to={"/"} className={s.logo} onClick={handleClick}>
                    <Title level={2} className={s.logo__text}>logo</Title>
                </Link>)
            }
        </>
    );
};