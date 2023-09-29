import React, {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {isError, isLoader} from "components/loader-error";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {EmptyList} from "components/empty-list/EmptyList";
import {CardList} from "modules/card-list";
import {favMessage, getFavSpots, userFavoritesSpots} from "modules/favorites";
import {getRoutesPass, routesPassMessage, userRoutesPass} from "modules/my-spots";
import {TFavoriteMySpotsProps} from "components/favorite-mySpots/types";
import {RoutePath} from "pages/routeConfig";

export const FavoriteMySpots = ({pageType}: TFavoriteMySpotsProps) => {
    const dispatch = useAppDispatch();
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);
    const favSpots = useAppSelector(userFavoritesSpots);
    const routesPass = useAppSelector(userRoutesPass);

    useEffect(() => {
        if (pageType === `${RoutePath.favorites}`) {
            fetchFavoriteData();
        } else if (pageType === `${RoutePath.mySpots}`) {
            fetchMySpotsData();
        }
    }, [favSpots, routesPass, dispatch, pageType]);

    const fetchFavoriteData = async () => {
        !favSpots && await getFavSpots(dispatch);
    }

    const fetchMySpotsData = async () => {
        !routesPass && await getRoutesPass(dispatch);
    }

    const cardList = favSpots !== null && favSpots.length > 0 && <CardList favPage spots={favSpots}/>;
    const mySpotsList = routesPass !== null && routesPass.length > 0 && <CardList routesPass spots={routesPass}/>;

    return (
        <div className="myList">
            {loader
                ? <div className="preloader-wrapper"><PreloaderCar /></div>
                : error
                    ? <ErrorMessage errorText={error}/>
                    : pageType === `${RoutePath.favorites}`
                        ? (cardList || <EmptyList fav text={favMessage}/>)
                        : pageType === `${RoutePath.mySpots}`
                            ? (mySpotsList || <EmptyList text={routesPassMessage} />)
                            : null
            }
        </div>
    )
}