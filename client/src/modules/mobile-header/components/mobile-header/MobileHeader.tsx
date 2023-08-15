import s from "./styles.module.scss";
import { Link, useLocation } from "react-router-dom";
import { SyntheticEvent } from "react";
import { menuLinks } from "./constants/menuLinks";
import classNames from "classnames";


export const MobileHeader = () => {

    const location = useLocation();
    const { pathname } = location;

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>, path: string) => {

        if (location.pathname === path) {
            e.preventDefault();
        }
    };

    return (
        <div className={s.container}>
            <nav className={s.mobile_menu}>
                <div className={s.menu__wrapper}>
                    {menuLinks.map((link, index) => (
                        <Link key={index} to={link.path} onClick={(e) => handleClick(e, link.path)}>
                            <span className={classNames({ [s.menu__icon_filled]: pathname === link.path })}>
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    )
}

/*                     <Link to={RoutePath.home} onClick={(e) => handleClick(e, RoutePath.home)}>
                        <span className={classNames({ [s.menu__icon_filled]: pathname === RoutePath.home })}>
                            <HomeIcon />
                        </span>
                    </Link>
                    <Link to={RoutePath.home} ><span className={classNames({ [s.menu__icon_filled]: pathname === RoutePath.spots })}><SearchIcon /></span></Link>
                    <Link to={RoutePath.home} ><span className={classNames({ [s.menu__icon_filled]: false })}><FavoritesIcon /></span></Link>
                    <Link to={RoutePath.home} ><span className={classNames({ [s.menu__icon_filled]: false })}><ProfileIcon /></span></Link>
                 */