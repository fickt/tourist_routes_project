import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { TUnderlineLinkProps } from "./types";

export const UnderlineLink = ({ link, textLink, onClick }: TUnderlineLinkProps) => {
    return (
        <Link
            to={link}
            className={s.link}
            onClick={onClick}
        >
            {textLink}
        </Link>
    )
}