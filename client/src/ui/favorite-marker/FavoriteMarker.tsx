import React, { useState } from "react";
import s from "./styles.module.scss";
import FavoritesIcon from "./assets/favorites.svg";
import classNames from "classnames";

export const FavoriteMarker = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <button
            className={classNames(s.favorite, isActive ? s.favorite_active : s.favorite_notActive)}
            onClick={toggleClick}>
            <FavoritesIcon />
        </button>
    )
}