import s from "./styles.module.scss"
import NotFoundIcon from "./images/notfound-icon.svg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { TNotFoundProps } from "./types";

export const NotFound = ({ children, title, buttonText = "На главную" }: TNotFoundProps) => {

    return (
        <div className={s.notfound}>
            <NotFoundIcon className={s.image} aria-hidden="true" />
            <h1 className={s.title}>{title}</h1>
            {children}
            <Link to="/"><Button type="link">{buttonText}</Button></Link>
        </div>
    )
};