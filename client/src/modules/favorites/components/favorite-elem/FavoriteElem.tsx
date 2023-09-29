import React, {memo} from "react";
import s from "./styles.module.scss";
import {favoriteService} from "modules/favorites/api/favoriteService";
import {TFavoriteElemProps} from "./types";
import {FavoriteMarker} from "modules/favorites/components/favorite-marker/FavoriteMarker";
import {useAppDispatch, useAppSelector} from "storage/hookTypes";
import {userFavoritesSpots} from "modules/favorites/store/favoriteSelector";
import {setFavoriteSpots} from "modules/favorites/store/favoriteActions";
import {setError} from "components/loader-error";
import {errorFavMessage} from "modules/favorites/constants/constants";

export const FavoriteElem = memo(({activeFavMark, spot}: TFavoriteElemProps) => {
    const dispatch = useAppDispatch();
    const favSpots = useAppSelector(userFavoritesSpots);
    const iconStyle = activeFavMark ? s.icon_active : "";

    const addToFav = async () => {
        if (favSpots) {
            try {
                const response = await favoriteService.addOrRemoveToFavorites(spot.id);
                dispatch(setFavoriteSpots(response.data));
            } catch (error) {
                dispatch(setError(errorFavMessage));
            }
        }
    }

    return (
        <FavoriteMarker iconStyle={iconStyle} addToFav={addToFav}/>
    )
});