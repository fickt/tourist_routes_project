import React, {useEffect} from "react";
import {CardListBody} from "modules/card-list";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {fetchFavSpots} from "modules/favorites";
import {PreloaderCar} from "ui/preloader/PreloaderCar";
import {ErrorMessage} from "ui/error-message/ErrorMessage";
import {authError, authLoader} from "modules/auth-form/store/authSelectors";
import classNames from "classnames";
import s from "./styles.module.scss";

export const FavoritesPage = () => {

    const dispatch = useAppDispatch();
    const favRoutes = useAppSelector(userFavoritesSpots);
    const loader = useAppSelector(authLoader);
    const error = useAppSelector(authError);

    useEffect(() => {
        const fetchData = async () => {
            await fetchFavSpots(dispatch);
        }
        fetchData();
    }, []);

    return (
        <div className={classNames("wrapper", s.favoriteWrapper)}>
            <CardListBody activeFavMark spots={favRoutes}/>
            {loader && <PreloaderCar/>}
            {!loader && (error && <ErrorMessage errorText={error}/>)}
        </div>
    );
}