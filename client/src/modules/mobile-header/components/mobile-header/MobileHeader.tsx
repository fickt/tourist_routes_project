import s from "./styles.module.scss";
import HomeIcon from "./assets/home.svg";
import SearchIcon from "./assets/search.svg";
import FavoritesIcon from "./assets/favorites.svg";
import ProfileIcon from "./assets/profile.svg";
import { Link } from "react-router-dom";
import { RoutePath } from "pages/routeConfig";


export const MobileHeader = () => {

    return (
        <div className={s.container}>
            <nav className={s.mobile_menu}>
                <div className={s.menu__wrapper}>
                    <Link to={RoutePath.home}><HomeIcon /></Link>
                    <Link to={RoutePath.home}><SearchIcon /></Link>
                    <Link to={RoutePath.home}><FavoritesIcon /></Link>
                    <Link to={RoutePath.home}><ProfileIcon /></Link>
                </div>
            </nav>
        </div>
    )
}