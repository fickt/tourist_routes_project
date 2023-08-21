import { Link } from "react-router-dom";
import s from "./styles.module.scss";

export const Menu = () => {
    
    return (
        <nav>
            <ul className={s.nav__list}>
                <li><Link to={"/"} className={s.nav__link}>Главная</Link></li>
                <li><Link to={"/spots"} className={s.nav__link}>Где можно отдохнуть?</Link></li>
                <li><Link to={"/login"} className={s.nav__link}>Войти</Link></li>
            </ul>
        </nav>
    );
};
