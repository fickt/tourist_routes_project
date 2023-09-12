import React, {SyntheticEvent} from "react";
import s from "./styles.module.scss";
import {Link, useLocation} from "react-router-dom";
import {menuLinks} from "./constants/menuLinks";
import classNames from "classnames";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {FavoriteElem} from "modules/favorites/components/favorite-elem/FavoriteElem";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {TLocalRoute} from "utils/localRoutes";
import {useDispatch} from "react-redux";
import {toggleReviewPopup} from "ui/popup/store/popupActions";

const preventNavigation = (currentPath: string, targetPath: string) => {
    return currentPath === targetPath;
};

export const MobileHeader = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const {pathname} = location;
    const {spotId} = useAppSelector(state => state.spotId);
    const spotIdAsNumber = parseInt(spotId, 10);
    const spotRoutes = useAppSelector(spotsSelector);
    const favSpots = useAppSelector(userFavoritesSpots);
    const isSpot = location.pathname.includes("/spots/");
    const isSpotMap = location.pathname.includes("/spotMap/");
    const chosenSpot = spotRoutes?.find((spot: TLocalRoute) => spot.id === spotIdAsNumber);
    const favoriteSpot = favSpots?.find((favSpot: TLocalRoute) => favSpot === chosenSpot);

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>, path: string) => {
        preventNavigation(pathname, path) && e.preventDefault();
    };

    const openReviewPopup = () => {
        dispatch(toggleReviewPopup(true));
    };

    return (
        <div className={s.container}>
            <nav className={s.menu}>
                <div className={!isSpotMap
                    ? classNames(s.menu__wrapper, {[s.menu__wrapper_spot]: isSpot})
                    : s.menu__wrapper_spot}
                >
                    {isSpotMap ? (
                        <div className={classNames("buttons__link", s.buttons__link_elem)}>
                            <Button
                                extraClass={classNames(s.menu__button, "button_green")}
                                type="primary"
                                action={openReviewPopup}
                            >
                                Маршрут пройден
                            </Button>
                        </div>
                    ) : !isSpot ? (
                        menuLinks.map((link, index) => (
                            <Link
                                key={index}
                                to={link.path}
                                onClick={(e) => handleClick(e, link.path)}
                            >
                                <span className={classNames(s.menu__icon, {[s.menu__icon_filled]: pathname === link.path,})}>
                                    {link.icon}
                                </span>
                            </Link>))
                        ) : (<>
                                {favoriteSpot && <FavoriteElem spot={favoriteSpot} activeFavMark />}
                                {chosenSpot && <FavoriteElem spot={chosenSpot} />}
                                <Link className={classNames("buttons__link", s.buttons__link_elem)} to={`/spotMap/:${spotId}`}>
                                    <Button extraClass="button_green" type="primary">Построить маршрут</Button>
                                </Link>
                            </>
                        )}
                </div>
            </nav>
        </div>
    );
};