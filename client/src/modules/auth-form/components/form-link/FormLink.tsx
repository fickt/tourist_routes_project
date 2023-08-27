import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { TFormLinkProps } from "./types";

export const FormLink = ({ link, textLink, onClick }: TFormLinkProps) => {
    return (
        <Link to={link} className={s.link} onClick={onClick}>
            {textLink}
        </Link>
    )
}