import s from "./styles.module.scss";
import {Link, useLocation} from "react-router-dom";
import {SyntheticEvent} from "react";
import {menuLinks} from "./constants/menuLinks";
import classNames from "classnames";
import {Button} from "ui/button/Button";
import {FavoriteMarker} from "ui/favorite-marker/FavoriteMarker";
import {useAppSelector} from "storage/hookTypes";

export const MobileHeader = () => {

    const location = useLocation();
    const {pathname} = location;
    const isSpot = location.pathname.includes("/spots/");
    const {spotId} = useAppSelector(state => state.spotId)

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>, path: string) => {

        if (location.pathname === path) {
            e.preventDefault();
        }
    };
    return (
        <div className={s.container}>
            <nav className={classNames(s.menu, {
                [s.menu__spot]: isSpot
            })}>
                <div className={classNames(s.menu__wrapper, {
                    [s.menu__wrapper_spot]: isSpot
                })}>
                    {!isSpot ? menuLinks.map((link, index) => (
                        <Link key={index} to={link.path} onClick={(e) => handleClick(e, link.path)}>
                            <span className={classNames(s.menu__icon, {[s.menu__icon_filled]: pathname === link.path})}>
                                {link.icon}
                            </span>
                        </Link>
                    )) : (
                        <>
                            <FavoriteMarker/>
                            <Link to={`/spotMap/${spotId}`}>
                                <Button extraClass={s.menu__spot_btn} type="primary">
                                    Построить маршрут
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    )
}
