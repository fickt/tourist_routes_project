import React, {memo} from "react";
import {FavoriteMarkerProps} from "./types";
import s from "./styles.module.scss";
import FavoritesIcon from "./assets/favorites.svg";

export const FavoriteMarker = memo(({iconStyle, addToFav}: FavoriteMarkerProps) => {

    return (
        <button className={s.favorite} onClick={addToFav}>
            <FavoritesIcon className={iconStyle}/>
        </button>
    )
});