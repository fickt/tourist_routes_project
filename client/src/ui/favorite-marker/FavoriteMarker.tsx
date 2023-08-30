import React, { useState } from "react";
import s from "./styles.module.scss";
import FavoritesIcon from "modules/mobile-header/components/mobile-header/assets/favorites.svg";

export const FavoriteMarker = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <button
            className={`${s.favorite} ${isActive && s.favorite_active}`}
            onClick={toggleClick}>
            <FavoritesIcon className={s.favorite_icon} />
        </button>
    )
}