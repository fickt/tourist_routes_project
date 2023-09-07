import React, {memo} from "react";
import s from "./styles.module.scss";
import {AxiosResponse} from "axios";
import {TLocalRoutes} from "utils/localRoutes";
import {favoriteService} from "modules/favorites/api/favoriteService";
import {TFavoriteElemProps} from "./types";
import {FavoriteMarker} from "modules/favorites/components/favorite-marker/FavoriteMarker";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {setFavMarkActive, setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {handleAuthError} from "modules/auth-form/store/authActions";

export const FavoriteElem = memo(({activeFavMark, id}: TFavoriteElemProps) => {

    const dispatch = useAppDispatch();
    const favoriteSpots = useAppSelector(userFavoritesSpots);
    const iconStyle = activeFavMark ? s.icon_active : "";

    const addToFav = async () => {
        if (favoriteSpots?.length && !favoriteSpots.some(favSpot => favSpot.id === id)) {
            try {
                const response: AxiosResponse<TLocalRoutes> = await favoriteService.addToFavorites(id);
                dispatch(setFavoriteSpots(response.data));
                dispatch(setFavMarkActive(true));
            } catch (error) {
                dispatch(handleAuthError("Место уже в избранном!"));
            }
        }
    }

    return (
        <FavoriteMarker iconStyle={iconStyle} addToFav={addToFav}/>
    )
});