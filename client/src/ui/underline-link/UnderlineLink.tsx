import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";

type Props = {
    link: string;
    textLink: string;
    onClick: () => void;
}

export const UnderlineLink = ({ link, textLink, onClick }: Props) => {
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