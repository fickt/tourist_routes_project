import React, {useEffect} from "react";
import {CardList} from "modules/card-list";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import s from "./styles.module.scss";
import {getFavSpots} from "modules/favorites";
import {favMessage} from "modules/favorites/constants/constants";

export const FavoritesPage = () => {

    const dispatch = useAppDispatch();
    const favSpots = useAppSelector(userFavoritesSpots);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);

    useEffect(() => {
        const fetchData = async () => {
            !favSpots && await getFavSpots(dispatch);
        }
        fetchData();
    }, [favSpots, dispatch]);

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