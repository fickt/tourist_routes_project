import React, {useEffect} from "react";
import {CardList} from "modules/card-list";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import s from "./styles.module.scss";
import {getFavSpots} from "modules/favorites";
import {favMessage} from "modules/favorites/constants/constants";
import {isError, isLoader} from "components/loader-error";

export const FavoritesPage = () => {

    const dispatch = useAppDispatch();
    const favSpots = useAppSelector(userFavoritesSpots);
    const loader = useAppSelector(isLoader);
    const error = useAppSelector(isError);

    useEffect(() => {
        fetchData();
    }, [favSpots, dispatch]);

    const fetchData = async () => {
        !favSpots && await getFavSpots(dispatch);
    }

    const cardList = favSpots !== null && favSpots.length > 0 && (
        <CardList favPage activeFavMark spots={favSpots}/>
    );

    const errorMessage = (
        <div className="wrapper">
            <div className={s.favoriteWrapper}>
                <ErrorMessage errorText={favMessage}/>
            </div>
        </div>
    );

    const loadingElem = (
        <div className="wrapper">
            <div className={s.favoriteWrapper}>
                {loader && <PreloaderCar/>}
                {!loader && error && <ErrorMessage errorText={error}/>}
            </div>
        </div>
    );

    return (
        <>
            {loader && loadingElem}
            {!loader && cardList || errorMessage}
        </>
    );
}