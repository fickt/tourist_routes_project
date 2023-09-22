import React, {SyntheticEvent, useEffect, useState} from "react";
import s from "./styles.module.scss";
import {Link, useLocation, useNavigate} from "react-router-dom";
import classNames from "classnames";
import {Button} from "ui/button/Button";
import {useAppSelector} from "storage/hookTypes";
import {FavoriteElem} from "modules/favorites/components/favorite-elem/FavoriteElem";
import {spotsSelector} from "modules/card-list/store/spotsSelectors";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {TLocalRoute} from "utils/localRoutes";
import {useDispatch} from "react-redux";
import {setRoutePass} from "modules/my-spots/api/routePassApi";
import {userRoutesPass} from "modules/my-spots/store/routesPassSelector";
import Cookies from "js-cookie";
import {RoutePath} from "pages/routeConfig";
import {isLoader} from "components/loader-error";
import {buttonText, menuLinks, spotMap} from "modules/mobile-header/constants/menuLinks";

const preventNavigation = (currentPath: string, targetPath: string) => {
    return currentPath === targetPath;
};

export const MobileHeader = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const {pathname} = location;
    const {spotId} = useAppSelector(state => state.spotId);
    const spotIdAsNumber = parseInt(spotId, 10);
    const loader = useAppSelector(isLoader);
    const spotRoutes = useAppSelector(spotsSelector);
    const favSpots = useAppSelector(userFavoritesSpots);
    const routesPass = useAppSelector(userRoutesPass);
    const isSpot = location.pathname.includes(`${RoutePath.spots}`);
    const isSpotMap = location.pathname.includes(spotMap);
    const chosenSpot = spotRoutes?.find((spot: TLocalRoute) => spot.id === spotIdAsNumber);
    const favoriteSpot = favSpots?.find((favSpot: TLocalRoute) => favSpot.id === spotIdAsNumber);
    const [isAlreadyPass, setAlreadyPass] = useState(false);
    const token = Cookies.get("token");

    const handleClick = (e: SyntheticEvent<HTMLAnchorElement>, path: string) => {
        preventNavigation(pathname, path) && e.preventDefault();
    };

    useEffect(() => {
        routesPass
            ? setAlreadyPass(routesPass.some((passSpot: TLocalRoute) => passSpot.id === spotIdAsNumber))
            : setAlreadyPass(false);
    }, [routesPass, spotIdAsNumber, dispatch])

    const setSpotPass = () => {
        if (!token) {
            const navigate = useNavigate();
            navigate(RoutePath.auth_login);
        } else {
            if (!isAlreadyPass) {
                const fetchData = async () => {
                    await setRoutePass(dispatch, spotIdAsNumber);
                    setAlreadyPass(true);
                }
                fetchData();
            }
        }
    }

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
                                action={setSpotPass}
                                disabled={loader || isAlreadyPass || !token}
                            >
                                {buttonText.passRoute}
                            </Button>
                        </div>
                    ) : !isSpot ? (
                        menuLinks.map((link, index) => (
                            <Link
                                className={s.menu__link_wrapper}
                                key={index}
                                to={link.path}
                                onClick={(e) => handleClick(e, link.path)}
                            >
                                <span className={classNames(s.menu__icon, {[s.menu__icon_filled]: pathname === link.path,})}>
                                    {link.icon}
                                </span>
                                <span className={classNames(s.menu__name, {[s.menu__name_filled]: pathname === link.path,})}>
                                    {link.text}
                                </span>
                            </Link>))
                    ) : (<>
                        <FavoriteElem spot={favoriteSpot ? favoriteSpot : chosenSpot} activeFavMark={!!favoriteSpot}/>
                        <Link className={classNames("buttons__link", s.buttons__link_elem)} to={`${spotMap}:${spotId}`}>
                            <Button extraClass="button_green" type="primary">{buttonText.buildRoute}</Button>
                        </Link>
                    </>
                    )}
                </div>
            </nav>
        </div>
    );
};