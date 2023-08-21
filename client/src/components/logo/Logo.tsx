import React, { SyntheticEvent } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./styles.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

export const Logo = () => {

    const location = useLocation();
    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
        
        if (location.pathname === "/") {
            e.preventDefault();
        }
    };

    return (
        <Link to={"/"} className={s.logo} onClick={handleClick}>
            <Title level={2} className={s.text}>LOGO</Title>
        </Link>
    );
};